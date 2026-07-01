import { AppStoreBadges } from "@/components/hero/app-store-badges";
import { CtaBadge } from "./cta-badge";
import { CtaPhoneMobile } from "./cta-phone-mobile";
import { CtaTrustRow } from "./cta-trust-row";

export function CtaContent() {
  return (
    <div className="relative z-10 flex w-full max-w-[840px] shrink-0 flex-col gap-8 xl:w-[840px] xl:gap-8">
      <div className="flex w-full flex-col gap-4 xl:gap-7">
        <div className="hidden xl:block">
          <CtaBadge />
        </div>

        <h2 className="w-full text-xl font-bold leading-7 text-text-inverse xl:text-heading-h1-bold">
          Download{" "}
          <span className="text-primary-600">Active Services</span> Today
        </h2>

        <p className="w-full text-sm leading-5 text-primary-50 xl:text-body-large-regular">
          Recharge your mobile, activate bundles, manage wallet payments, and
          access essential services - all in one secure app.
        </p>
      </div>

      {/* Figma 647:4301 — trust row sets height; phone overflows into 32px gaps above/below */}
      <div className="relative w-full xl:hidden">
        <CtaTrustRow className="relative z-10 w-full" />
        <CtaPhoneMobile />
      </div>

      <div className="w-full xl:hidden">
        <AppStoreBadges size="sm" className="gap-4" />
      </div>

      <div className="hidden flex-col gap-8 xl:flex">
        <AppStoreBadges />
        <CtaTrustRow />
      </div>
    </div>
  );
}
