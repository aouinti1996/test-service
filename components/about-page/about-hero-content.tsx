export function AboutHeroContent() {
  return (
    <div className="relative z-10 flex w-[700px] max-w-full flex-col gap-6">
      <div className="inline-flex w-fit items-center self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2">
        <span className="whitespace-nowrap text-body-small-medium font-semibold text-primary-subtle-text">
          About Us
        </span>
      </div>

      <h1 className="text-heading-h1-bold text-text-heading">
        <span className="text-primary-subtle-text">Connecting Afghanistan</span> to
        the Digital Economy
      </h1>

      <p className="max-w-[580px] text-body-small-regular text-text-body">
        Active Services is more than just a recharge platform. We are the digital
        bridge connecting millions of Afghans to essential telecom and financial
        services through innovation and trust.
      </p>
    </div>
  );
}
