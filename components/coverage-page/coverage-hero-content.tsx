export function CoverageHeroContent() {
  return (
    <div className="relative z-10 flex w-[700px] max-w-full flex-col gap-6">
      <div className="inline-flex w-fit items-center self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2">
        <span className="whitespace-nowrap text-body-small-medium font-semibold text-primary-subtle-text">
          Coverage
        </span>
      </div>

      <h1 className="text-heading-h1-bold">
        <span className="text-primary-subtle-text">Nationwide Coverage</span>
        <span className="text-text-heading">, Built for Every Province</span>
      </h1>

      <p className="max-w-[580px] text-body-small-regular text-text-body">
        Active Services connects customers, retailers, and agents across
        Afghanistan with reliable access to mobile recharge, bundles, wallet
        services, and retailer tools.
      </p>
    </div>
  );
}
