import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import { JsonLd } from "@/components/JsonLd";
import { CAMPAIGN_TITLE, SITE, getCampaignUrl } from "@/lib/site";
import "./globals.css";

const campaignUrl = getCampaignUrl();

export const metadata: Metadata = {
  metadataBase: new URL(campaignUrl),
  title: CAMPAIGN_TITLE,
  description: SITE.description,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: campaignUrl,
    siteName: SITE.name,
    title: CAMPAIGN_TITLE,
    description: SITE.description,
    images: [
      {
        url: "/campaign/hero.jpeg",
        width: 1580,
        height: 995,
        alt: "Campagne de reconstruction Télé École",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CAMPAIGN_TITLE,
    description: SITE.description,
    images: ["/campaign/hero.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e2366",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
