function resolveCampaignUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_CAMPAIGN_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/+$/, "");
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return `https://${vercelProduction.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/\/+$/, "")}`;
  }

  return "https://aide.tele-ecole.tv";
}

export const SITE = {
  name: "Télé École",
  tagline: "la télé 100% éducation",
  url: "https://tele-ecole.tv",
  canonical: resolveCampaignUrl(),
  description:
    "Télé École a brûlé. Participez à la reconstruction de la 1re télévision éducative d'Afrique via Wave, Orange Money ou virement bancaire.",
  phone: "+221 33 867 06 07",
  phoneHref: "tel:+221338670607",
  email: "info@tele-ecole.tv",
  address: "Sicap Sacré Cœur 3, Villa N° 10010, Dakar",
  socials: {
    facebook: "https://www.facebook.com/teleecole/",
    instagram: "https://www.instagram.com/tele_ecole",
    x: "https://x.com/teleecole",
    youtube: "https://www.youtube.com/channel/UCHTvrKUS9xiof9Y9UKODAEg",
  },
} as const;

export const CAMPAIGN_TITLE = `${SITE.name} a brûlé - Reconstruisons-la ensemble`;

export function getCampaignUrl() {
  return SITE.canonical.replace(/\/+$/, "");
}

export const COPY = {
  kicker: "1re Télévision éducative d'Afrique · 100% gratuite",
  h1Line1: "Télé École a brûlé.",
  h1Line2: "Nous allons la reconstruire.",
  urgency:
    "13 ans d'investissements pour l'éducation et le développement partis en fumée.",
  cta: "Je participe",
  contactNav: "Contact",
  participateTitle: "Je participe",
  scanHint: "Scannez ou ouvrez l'application",
  waveCta: "Participer via Wave",
  orangeCta: "Participer via Orange Money",
  bankSummary: "Autre moyen : virement bancaire - Coris Bank",
  bankSummaryShort: "Autre moyen : virement bancaire",
  copyIban: "Copier l'IBAN",
  copied: "Copié",
  audiences: "Élèves · Étudiants · Enseignants · Parents",
  signatureDesktop:
    "Une conscience citoyenne pour préserver un bien commun.",
  signatureMobile:
    "Ensemble, reconstruisons Télé École pour continuer à éduquer, informer et transformer des vies.",
  campaignSignature: "TÉLÉ ÉCOLE, la télé 100% éducation",
  shareWhatsApp: "Partager cette campagne sur WhatsApp",
  footerValues: "Télé École – Éducation · Innovation · Impact",
  footerThanks: "Merci pour votre soutien.",
  footerContactTitle: "Contact",
  contactPhoneLabel: "Téléphone",
  contactEmailLabel: "Email",
  contactWebsiteLabel: "Site web",
} as const;

export const AMOUNTS = [
  {
    icon: "africa" as const,
    amount: "1 000 F CFA",
    label: "Sénégal & Afrique",
  },
  {
    icon: "globe" as const,
    amount: "10 € / 10 $",
    label: "étranger",
  },
  {
    icon: "heart" as const,
    amount: "Montant libre",
    label: "Ou le montant de votre choix",
  },
] as const;

export function getWhatsAppShareUrl(pageUrl?: string) {
  const text = encodeURIComponent(
    [COPY.h1Line1, COPY.h1Line2, pageUrl].filter(Boolean).join(" "),
  );
  return `https://wa.me/?text=${text}`;
}
