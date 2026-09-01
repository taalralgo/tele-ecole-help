import { COPY, SITE } from "@/lib/site";
import {
  IconGlobe,
  IconInstagram,
  IconMail,
  IconPhone,
  IconYouTube,
} from "@/components/icons";

const contacts = [
  {
    href: SITE.phoneHref,
    label: COPY.contactPhoneLabel,
    value: SITE.phone,
    external: false,
    Icon: IconPhone,
  },
  {
    href: `mailto:${SITE.email}`,
    label: COPY.contactEmailLabel,
    value: SITE.email,
    external: false,
    Icon: IconMail,
  },
  {
    href: SITE.url,
    label: COPY.contactWebsiteLabel,
    value: SITE.url.replace("https://", ""),
    external: true,
    Icon: IconGlobe,
  },
] as const;

export function CampaignFooter() {
  return (
    <footer id="footer" className="campaign-footer">
      <div className="campaign-footer__inner">
        <section
          className="campaign-footer__contact-block"
          aria-labelledby="footer-contact-title"
        >
          <h2
            id="footer-contact-title"
            className="campaign-footer__heading font-display"
          >
            {COPY.footerContactTitle}
          </h2>

          <ul className="campaign-footer__contact-list">
            {contacts.map(({ href, label, value, external, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="campaign-footer__contact"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon className="campaign-footer__icon" />
                  <span className="campaign-footer__contact-body">
                    <span className="campaign-footer__contact-label">
                      {label}
                    </span>
                    <span className="campaign-footer__contact-value">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

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

        <p className="campaign-footer__values">{COPY.footerValues}</p>
        <p className="campaign-footer__thanks">
          {COPY.footerThanks} <span aria-hidden="true">💛</span>
        </p>
      </div>
    </footer>
  );
}
