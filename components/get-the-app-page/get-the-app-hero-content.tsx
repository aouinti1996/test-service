import { AppStoreBadges } from "@/components/hero/app-store-badges";

export function GetTheAppHeroContent() {
  return (
    <div className="relative z-10 flex w-full max-w-[700px] flex-col gap-4 xl:w-[700px] xl:gap-10">
      <div className="flex flex-col gap-4 xl:gap-6">
        <div className="inline-flex w-fit items-center self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-2 py-1 xl:px-4 xl:py-2">
          <span className="whitespace-nowrap text-[11px] font-medium leading-[14px] text-primary-600 xl:text-body-small-medium xl:font-semibold xl:text-primary-subtle-text">
            Get the App
          </span>
        </div>

        <h1 className="text-2xl font-bold leading-8 text-text-heading xl:text-heading-h1-bold">
          <span className="text-primary-600 xl:text-primary-subtle-text">Download</span>{" "}
          Active Services Today
        </h1>

        <p className="max-w-[580px] text-sm leading-5 text-text-body xl:text-body-small-regular">
          Recharge your mobile, activate bundles, manage wallet payments, and
          access retailer services from one secure app built for Afghanistan.
        </p>
      </div>

      <AppStoreBadges size="sm" className="gap-4 xl:hidden" />
      <AppStoreBadges className="hidden xl:flex" />
    </div>
  );
}
