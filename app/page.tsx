import { CampaignClose } from "@/components/CampaignClose";
import { CampaignFooter } from "@/components/CampaignFooter";
import { DonationAmounts } from "@/components/DonationAmounts";
import { Hero } from "@/components/Hero";
import { ParticipateSection } from "@/components/ParticipateSection";
import { StickyHeader } from "@/components/StickyHeader";

export default function Home() {
  return (
    <>
      <main>
        <div className="campaign-intro">
          <div className="campaign-intro__responsive">
            <StickyHeader />
            <Hero />
            <DonationAmounts />
          </div>
        </div>
        <ParticipateSection />
        <CampaignClose />
      </main>
      <CampaignFooter />
    </>
  );
}
