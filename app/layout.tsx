import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.canonical),
  title: `${SITE.name} a brûlé — Reconstruisons-la ensemble`,
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: SITE.canonical,
    siteName: SITE.name,
    title: `${SITE.name} a brûlé — Reconstruisons-la ensemble`,
    description: SITE.description,
    images: [
      {
        url: "/campaign/og.webp",
        width: 1200,
        height: 630,
        alt: "Campagne de reconstruction Télé École",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} a brûlé — Reconstruisons-la ensemble`,
    description: SITE.description,
    images: ["/campaign/og.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
