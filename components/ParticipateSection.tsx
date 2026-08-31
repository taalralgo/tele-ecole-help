import {
  ORANGE_MONEY_PAY_URL,
  ORANGE_MONEY_QR_PATH,
  WAVE_PAY_URL,
  WAVE_QR_PATH,
} from "@/lib/payments";
import { COPY } from "@/lib/site";
import { BankTransfer } from "@/components/BankTransfer";
import { PaymentCard } from "@/components/PaymentCard";

export function ParticipateSection() {
  return (
    <section
      id="participer"
      className="participate"
    >
      <div className="participate__inner">
        <h2 className="participate__title font-display">
          {COPY.participateTitle}
        </h2>

        <div className="participate__cards">
          <PaymentCard
            provider="wave"
            qrSrc={WAVE_QR_PATH}
            qrAlt="QR code Wave pour participer à la reconstruction de Télé École"
            payUrl={WAVE_PAY_URL}
            ctaLabel={COPY.waveCta}
          />
          <PaymentCard
            provider="orange"
            qrSrc={ORANGE_MONEY_QR_PATH}
            qrAlt="QR code Orange Money pour participer à la reconstruction de Télé École"
            payUrl={ORANGE_MONEY_PAY_URL}
            ctaLabel={COPY.orangeCta}
          />
        </div>

        <div className="participate__bank">
          <BankTransfer />
        </div>
      </div>
    </section>
  );
}
