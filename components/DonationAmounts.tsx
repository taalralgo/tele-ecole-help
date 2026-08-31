import { AMOUNTS } from "@/lib/site";
import {
  IconAfrica,
  IconGlobe,
  IconHeart,
} from "@/components/icons";

const iconMap = {
  africa: IconAfrica,
  globe: IconGlobe,
  heart: IconHeart,
} as const;

export function DonationAmounts() {
  return (
    <section
      aria-label="Montants de participation"
      className="donation-amounts"
    >
      <div className="donation-amounts__inner">
        {AMOUNTS.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.amount}
              className="donation-amount"
            >
              <span className="donation-amount__icon">
                <Icon className="donation-amount__svg" />
              </span>
              <div className="donation-amount__copy">
                <p className="donation-amount__value font-display">
                  {item.amount}
                </p>
                <p className="donation-amount__label">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
