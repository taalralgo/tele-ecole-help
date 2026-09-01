"use client";

import Image from "next/image";
import { COPY } from "@/lib/site";
import { IconPhoneScan } from "@/components/icons";

type PaymentCardProps = {
  provider: "wave" | "orange";
  qrSrc: string;
  qrAlt: string;
  payUrl: string;
  ctaLabel: string;
};

const styles = {
  wave: {
    brand: "Wave",
  },
  orange: {
    brand: "Orange Money",
  },
} as const;

export function PaymentCard({
  provider,
  qrSrc,
  qrAlt,
  payUrl,
  ctaLabel,
}: PaymentCardProps) {
  const style = styles[provider];

  return (
    <article className={`payment-card payment-card--${provider}`}>
      <div className="payment-card__mobile-visual">
        <div className={`payment-brand payment-brand--${provider}`}>
          {provider === "wave" ? (
            <>
              <span className="wave-penguin" aria-hidden="true" />
              <span className="wave-word font-display">wave</span>
            </>
          ) : (
            <>
              <Image
                src="/brand/orange-money.webp"
                alt=""
                width={150}
                height={150}
                className="orange-logo"
              />
              <span className="orange-word">Orange<br />Money</span>
            </>
          )}
          <span className="sr-only">{style.brand}</span>
        </div>
        <div className={`payment-card__qr payment-card__qr--${provider}`}>
          <Image
            src={qrSrc}
            alt={qrAlt}
            width={160}
            height={160}
            className="payment-card__qr-image"
          />
        </div>
      </div>

      <div className={`payment-card__desktop-visual payment-card__desktop-visual--${provider}`}>
        {provider === "wave" ? (
          <Image
            src="/qr/wave.jpeg"
            alt={qrAlt}
            width={155}
            height={175}
            className="payment-card__wave-sheet"
          />
        ) : (
          <>
            <div className="payment-card__orange-heading">
              <Image
                src="/brand/orange-money.webp"
                alt=""
                width={46}
                height={46}
              />
              <span>Orange<br />Money</span>
            </div>
            <Image
              src={qrSrc}
              alt={qrAlt}
              width={118}
              height={118}
              className="payment-card__orange-qr"
            />
          </>
        )}
      </div>

      <div className="payment-card__content">
        <h3 className="payment-card__title font-display">
          Payez avec {style.brand}
        </h3>
        <p className="payment-card__description">
          Scannez ce QR code avec l&apos;application {style.brand} pour effectuer
          votre don en toute sécurité.
        </p>
        <p className="payment-card__desktop-hint">
          <IconPhoneScan className="payment-card__phone" />
          {COPY.scanHint}
        </p>
        <a
          href={payUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="payment-card__button font-display"
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
