import Image from "next/image";
import Link from "next/link";
import { COPY, SITE } from "@/lib/site";

export function StickyHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          href="/"
          aria-label="Télé École - accueil"
          className="site-header__brand"
        >
          <Image
            src="/campaign/campaign-logo.webp"
            alt={SITE.name}
            width={570}
            height={145}
            className="site-header__logo"
            priority
          />
        </Link>
        <a
          href="#footer"
          className="site-header__cta font-display"
        >
          {COPY.contactNav}
        </a>
      </div>
    </header>
  );
}
