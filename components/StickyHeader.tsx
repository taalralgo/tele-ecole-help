import Image from "next/image";
import Link from "next/link";
import { COPY, SITE } from "@/lib/site";

export function StickyHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          href="/"
          aria-label="Télé École — accueil"
          className="site-header__brand"
        >
          <Image
            src="/brand/logo-tele-ecole.png"
            alt={SITE.name}
            width={250}
            height={81}
            className="site-header__logo"
            priority
          />
        </Link>
        <a
          href="#participer"
          className="site-header__cta font-display"
        >
          {COPY.cta}
        </a>
      </div>
    </header>
  );
}
