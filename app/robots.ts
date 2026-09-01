import type { MetadataRoute } from "next";
import { getCampaignUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const origin = getCampaignUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
    host: new URL(origin).host,
  };
}
