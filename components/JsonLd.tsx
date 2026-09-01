import { getCampaignJsonLd } from "@/lib/json-ld";

export function JsonLd() {
  const jsonLd = getCampaignJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
