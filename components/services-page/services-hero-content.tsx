export function ServicesHeroContent() {
  return (
    <div className="relative z-10 flex w-[700px] max-w-full flex-col gap-6">
      <div className="inline-flex w-fit items-center self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2">
        <span className="whitespace-nowrap text-body-small-medium font-semibold text-primary-subtle-text">
          Our Services
        </span>
      </div>

      <h1 className="text-heading-h1-bold text-text-heading">
        Smart Solutions,{" "}
        <span className="text-primary-subtle-text">Simplified</span> For Your
        Needs
      </h1>

      <p className="max-w-[580px] text-body-small-regular text-text-body">
        Active Services provides fast, secure, and reliable digital solutions to
        keep you connected and in control.
      </p>
    </div>
  );
}
