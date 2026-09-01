import { CampaignClose } from "@/components/CampaignClose";
import { CampaignFooter } from "@/components/CampaignFooter";
import { DonationAmounts } from "@/components/DonationAmounts";
import { Hero } from "@/components/Hero";
import { ParticipateSection } from "@/components/ParticipateSection";
import { StickyHeader } from "@/components/StickyHeader";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
        <DonationAmounts />
        <ParticipateSection />
        <CampaignClose />
      </main>
      <CampaignFooter />
    </>
  );
}
