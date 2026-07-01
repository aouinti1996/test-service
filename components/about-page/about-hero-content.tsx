export function AboutHeroContent() {
  return (
    <div className="relative z-10 flex w-full max-w-[700px] flex-col gap-4 xl:w-[700px] xl:gap-6">
      <div className="inline-flex w-fit items-center self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-2 py-1 xl:px-4 xl:py-2">
        <span className="whitespace-nowrap text-[11px] font-medium leading-[14px] text-primary-600 xl:text-body-small-medium xl:font-semibold xl:text-primary-subtle-text">
          About Us
        </span>
      </div>

      <h1 className="text-2xl font-bold leading-8 xl:text-heading-h1-bold">
        <span className="text-primary-600 xl:text-primary-subtle-text">
          Connecting Afghanistan
        </span>
        <span className="text-text-heading"> to the Digital Economy</span>
      </h1>

      <p className="max-w-[580px] text-sm leading-5 text-text-body xl:text-body-small-regular">
        Active Services is more than just a recharge platform. We are the digital
        bridge connecting millions of Afghans to essential telecom and financial
        services through innovation and trust.
      </p>
    </div>
  );
}
