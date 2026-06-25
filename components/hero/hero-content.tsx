import { AppStoreBadges } from "./app-store-badges";
import { HeroBadge } from "./hero-badge";
import { SupportedNetworks } from "./supported-networks";

export function HeroContent() {
  return (
    <div className="relative z-10 flex w-[700px] max-w-full flex-col gap-10">
      <div className="flex w-full flex-col gap-6">
        <HeroBadge />

        <h1 className="text-heading-h1-bold text-text-heading">
          Recharge Phones in{" "}
          <span className="text-primary-subtle-text">Afghanistan</span> to
          Anyone, From Anywhere.
        </h1>

        <div className="max-w-[580px] text-body-small-regular text-text-body">
          <p>
            With Active Services, it&apos;s easy to make your family and friends
            happy! It takes only seconds to top up their mobiles back home. Fast
            and secure mobile recharges, E- payments and exciting bonuses and
            more.
          </p>
          <p className="mt-5">
            Start business with Active Services and feel free to purchase
            pre-paid recharge card any time with any amount from anywhere.
          </p>
        </div>
      </div>

      <AppStoreBadges />
      <SupportedNetworks />
    </div>
  );
}
