import { COPY, SITE } from "@/lib/site";
import {
  IconGlobe,
  IconInstagram,
  IconMail,
  IconPhone,
  IconYouTube,
} from "@/components/icons";

export function CampaignFooter() {
  return (
    <footer className="campaign-footer">
      <div className="campaign-footer__inner">
        <div className="campaign-footer__contacts">
          <a href={SITE.phoneHref} className="campaign-footer__contact">
            <IconPhone className="campaign-footer__icon" />
            {SITE.phone}
          </a>
          <span className="campaign-footer__separator" aria-hidden="true" />
          <a href={`mailto:${SITE.email}`} className="campaign-footer__contact">
            <IconMail className="campaign-footer__icon" />
            {SITE.email}
          </a>
          <span className="campaign-footer__separator" aria-hidden="true" />
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="campaign-footer__contact"
          >
            <IconGlobe className="campaign-footer__icon" />
            {SITE.url.replace("https://", "")}
          </a>
          <span
            className="campaign-footer__separator campaign-footer__social-separator"
            aria-hidden="true"
          />
          <nav
            className="campaign-footer__socials"
            aria-label="Réseaux sociaux"
          >
            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télé École sur Facebook"
            >
              f
            </a>
            <a
              href={SITE.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télé École sur X"
            >
              𝕏
            </a>
            <a
              href={SITE.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télé École sur YouTube"
            >
              <IconYouTube className="campaign-footer__social-icon" />
            </a>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télé École sur Instagram"
            >
              <IconInstagram className="campaign-footer__social-icon" />
            </a>
          </nav>
        </div>
        <p className="campaign-footer__values">{COPY.footerValues}</p>
        <p className="campaign-footer__thanks">
          {COPY.footerThanks} <span aria-hidden="true">💛</span>
        </p>
      </div>
    </footer>
  );
}
