import { CAMPAIGN_TITLE, COPY, SITE, getCampaignUrl } from "@/lib/site";

export function getCampaignJsonLd() {
  const origin = getCampaignUrl();
  const organizationId = `${origin}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE.name,
        alternateName: "télé-école",
        slogan: SITE.tagline,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phone,
        logo: `${origin}/brand/icon.png`,
        image: `${origin}/campaign/hero.jpeg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sicap Sacré Cœur 3, Villa N° 10010",
          addressLocality: "Dakar",
          addressCountry: "SN",
        },
        sameAs: Object.values(SITE.socials),
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: CAMPAIGN_TITLE,
        inLanguage: "fr-SN",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": `${origin}/#webpage`,
        url: origin,
        name: CAMPAIGN_TITLE,
        description: SITE.description,
        inLanguage: "fr-SN",
        isPartOf: { "@id": `${origin}/#website` },
        about: { "@id": organizationId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${origin}/campaign/hero.jpeg`,
        },
        potentialAction: { "@id": `${origin}/#donate` },
      },
      {
        "@type": "DonateAction",
        "@id": `${origin}/#donate`,
        name: COPY.cta,
        description: SITE.description,
        target: `${origin}/#participer`,
        recipient: { "@id": organizationId },
      },
    ],
  };
}
