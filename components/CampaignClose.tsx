import Link from "next/link";
import { COPY, getWhatsAppShareUrl } from "@/lib/site";
import { IconHeart, IconWhatsApp } from "@/components/icons";

type CampaignCloseProps = {
  shareUrl: string;
};

export function CampaignClose({ shareUrl }: CampaignCloseProps) {
  const whatsAppUrl = getWhatsAppShareUrl(shareUrl);

  return (
    <section className="campaign-close">
      <div className="campaign-close__inner">
        <IconHeart className="campaign-close__heart" />
        <div className="campaign-close__message">
          <p className="campaign-close__audiences font-display">
            {COPY.audiences}
          </p>
          <p className="campaign-close__signature campaign-close__signature--desktop">
            {COPY.signatureDesktop}
          </p>
          <p className="campaign-close__signature campaign-close__signature--mobile">
            {COPY.signatureMobile}
          </p>
          <p className="campaign-close__slogan">{COPY.campaignSignature}</p>
        </div>
        <Link
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="campaign-close__share"
        >
          <IconWhatsApp className="campaign-close__whatsapp" />
          {COPY.shareWhatsApp}
        </Link>
      </div>
    </section>
  );
}
