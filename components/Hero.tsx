import Image from "next/image";
import { COPY } from "@/lib/site";

export function Hero() {
  return (
    <section className="campaign-hero">
      <div className="campaign-hero__inner">
        <div className="campaign-hero__copy">
          <p className="campaign-hero__kicker font-display">
            {COPY.kicker}
          </p>
          <h1 className="sr-only">
            Télé École a brûlé. Nous allons la reconstruire.
          </h1>
          <Image
            src="/campaign/hero-title.webp"
            alt=""
            aria-hidden="true"
            width={770}
            height={285}
            className="campaign-hero__title-art"
            priority
          />
          <p className="campaign-hero__urgency">
            <span>13 ans d’investissements pour l’éducation et</span>{" "}
            <span>le développement en fumée. Aidez-nous à</span>{" "}
            <span>rallumer l’espoir.</span>
          </p>
          <a
            href="#participer"
            className="campaign-hero__cta font-display"
          >
            {COPY.cta}
          </a>
        </div>
      </div>

      <div className="campaign-hero__visual">
        <Image
          src="/campaign/hero-scene.webp?v=1"
          alt="Élève assis dans le studio Télé École incendié"
          fill
          className="campaign-hero__image"
          priority
          unoptimized
          sizes="(min-width: 900px) 560px, 100vw"
        />
      </div>
      <div className="campaign-hero__shade" />
    </section>
  );
}
