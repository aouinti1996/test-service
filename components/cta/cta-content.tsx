import { AppStoreBadges } from "@/components/hero/app-store-badges";
import { CtaBadge } from "./cta-badge";
import { CtaTrustRow } from "./cta-trust-row";

export function CtaContent() {
  return (
    <div className="relative z-10 flex w-[840px] shrink-0 flex-col gap-8">
      <div className="flex w-full flex-col gap-7">
        <CtaBadge />

        <h2 className="text-heading-h1-bold text-text-inverse">
          Download{" "}
          <span className="text-primary-subtle-text">Active Services</span> Today
        </h2>

        <p className="max-w-[840px] text-body-large-regular text-primary-50">
          Recharge your mobile, activate bundles, manage wallet payments, and
          access essential services - all in one secure app.
        </p>
      </div>

      <AppStoreBadges />

      <CtaTrustRow />
    </div>
  );
}
