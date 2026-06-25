import { AppStoreBadges } from "@/components/hero/app-store-badges";

export function GetTheAppHeroContent() {
  return (
    <div className="relative z-10 flex w-[700px] max-w-full flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2">
          <span className="whitespace-nowrap text-body-small-medium font-semibold text-primary-subtle-text">
            Get the App
          </span>
        </div>

        <h1 className="text-heading-h1-bold text-text-heading">
          <span className="text-primary-subtle-text">Download</span> Active
          Services Today
        </h1>

        <p className="max-w-[580px] text-body-small-regular text-text-body">
          Recharge your mobile, activate bundles, manage wallet payments, and
          access retailer services from one secure app built for Afghanistan.
        </p>
      </div>

      <AppStoreBadges />
    </div>
  );
}
