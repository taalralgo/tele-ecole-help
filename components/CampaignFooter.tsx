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
    Icon: IconPhone,
  },
  {
    href: `mailto:${SITE.email}`,
    label: COPY.contactEmailLabel,
    value: SITE.email,
    Icon: IconMail,
  },
  {
    href: SITE.url,
    label: COPY.contactWebsiteLabel,
    value: COPY.footerFollowWebsite,
    Icon: IconGlobe,
    className: "campaign-footer__contact--website",
    external: true,
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

          <div className="campaign-footer__contact-row">
            {contacts.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                className={
                  "className" in contact && contact.className
                    ? `campaign-footer__contact ${contact.className}`
                    : "campaign-footer__contact"
                }
                {...("external" in contact && contact.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <contact.Icon className="campaign-footer__icon" />
                <span className="campaign-footer__contact-body">
                  <span className="campaign-footer__contact-label">
                    {contact.label}
                  </span>
                  <span className="campaign-footer__contact-value">
                    {contact.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section
          className="campaign-footer__follow-block"
          aria-labelledby="footer-follow-title"
        >
          <h3 id="footer-follow-title" className="campaign-footer__follow-title">
            {COPY.footerFollowTitle}
          </h3>

          <ul className="campaign-footer__follow-list">
            <li>{COPY.footerFollowTnt}</li>
            <li>{COPY.footerFollowOrange}</li>
            <li>
              <span className="campaign-footer__follow-lead">
                {COPY.footerFollowApps} :
              </span>{" "}
              <a
                href={SITE.apps.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="campaign-footer__follow-link"
              >
                {COPY.footerFollowPlayStore}
              </a>
              <span aria-hidden="true"> / </span>
              <a
                href={SITE.apps.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="campaign-footer__follow-link"
              >
                {COPY.footerFollowAppStore}
              </a>
            </li>
            <li>{COPY.footerFollowIptv}</li>
          </ul>
        </section>

        <nav className="campaign-footer__socials" aria-label="Réseaux sociaux">
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
