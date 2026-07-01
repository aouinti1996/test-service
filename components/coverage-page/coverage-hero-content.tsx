export function CoverageHeroContent() {
  return (
    <div className="relative z-10 flex w-full max-w-[700px] flex-col gap-4 xl:w-[700px] xl:gap-6">
      <div className="inline-flex w-fit items-center self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-2 py-1 xl:px-4 xl:py-2">
        <span className="whitespace-nowrap text-[11px] font-medium leading-[14px] text-primary-600 xl:text-body-small-medium xl:font-semibold xl:text-primary-subtle-text">
          Coverage
        </span>
      </div>

      <h1 className="text-2xl font-bold leading-8 text-text-heading xl:text-heading-h1-bold">
        <span className="text-primary-600 xl:text-primary-subtle-text">
          Nationwide Coverage
        </span>
        <span className="text-text-heading">, Built for Every Province</span>
      </h1>

      <p className="max-w-[580px] text-sm leading-5 text-text-body xl:text-body-small-regular">
        Active Services connects customers, retailers, and agents across
        Afghanistan with reliable access to mobile recharge, bundles, wallet
        services, and retailer tools.
      </p>
    </div>
  );
}
