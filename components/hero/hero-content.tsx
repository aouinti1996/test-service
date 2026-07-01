import { AppStoreBadges } from "./app-store-badges";
import { HeroBadge } from "./hero-badge";
import { HeroVisualMobile } from "./hero-visual-mobile";
import { SupportedNetworks } from "./supported-networks";

export function HeroContent() {
  return (
    <div className="relative z-10 flex w-full max-w-[700px] flex-col gap-10 xl:gap-10">
      <div className="flex w-full flex-col gap-4 xl:gap-6">
        <HeroBadge />

        <h1 className="text-[24px] font-bold leading-8 text-text-heading xl:text-heading-h1-bold">
          Recharge Phones in{" "}
          <span className="text-primary-subtle-text">Afghanistan</span> to
          Anyone, From Anywhere.
        </h1>

        <div className="max-w-[580px] text-sm leading-5 text-text-body xl:text-body-small-regular">
          <p>
            With Active Services, it&apos;s easy to make your family and friends
            happy! It takes only seconds to top up their mobiles back home. Fast
            and secure mobile recharges, E- payments and exciting bonuses and
            more.
          </p>
          <p className="mt-5 xl:mt-5">
            Start business with Active Services and feel free to purchase
            pre-paid recharge card any time with any amount from anywhere.
          </p>
        </div>
      </div>

      <AppStoreBadges size="sm" className="xl:hidden" />
      <AppStoreBadges className="hidden xl:flex" />

      <SupportedNetworks />

      <HeroVisualMobile />
    </div>
  );
}
