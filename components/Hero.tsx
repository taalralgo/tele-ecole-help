import Image from "next/image";
import { COPY } from "@/lib/site";
import { IconArrowRight } from "@/components/icons";

export function Hero() {
  return (
    <section className="campaign-hero">
      <div className="campaign-hero__mobile-image">
        <Image
          src="/campaign/hero-approved.webp"
          alt=""
          fill
          className="campaign-hero__image"
          priority
          unoptimized
          sizes="58vw"
        />
        <div className="campaign-hero__mobile-shade" />
      </div>

      <div className="campaign-hero__inner">
        <div className="campaign-hero__copy">
          <p className="campaign-hero__kicker font-display">
            {COPY.kicker}
          </p>
          <div className="campaign-hero__statement">
            <h1 className="campaign-hero__title font-display">
              <span>{COPY.h1Line1}</span>{" "}
              <span className="campaign-hero__title-accent">{COPY.h1Line2}</span>
            </h1>
            <p className="campaign-hero__urgency">
              {COPY.urgency}{" "}
              <span className="campaign-hero__mobile-extra">
                Aidez-nous à rallumer l&apos;espoir.
              </span>
            </p>
          </div>
          <a
            href="#participer"
            className="campaign-hero__cta font-display"
          >
            {COPY.cta}
            <IconArrowRight className="campaign-hero__arrow" />
          </a>
        </div>

        <div className="campaign-hero__desktop-image">
          <Image
            src="/campaign/hero-approved.webp"
            alt="Élève assis dans le studio Télé École incendié"
            fill
            className="campaign-hero__image"
            priority
            unoptimized
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
