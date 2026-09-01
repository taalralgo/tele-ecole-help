import { COPY } from "@/lib/site";
import { IconHeart } from "@/components/icons";
import { WhatsAppShareLink } from "@/components/WhatsAppShareLink";

export function CampaignClose() {
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
        <WhatsAppShareLink
          fallbackUrl={process.env.NEXT_PUBLIC_CAMPAIGN_URL}
        />
      </div>
    </section>
  );
}
