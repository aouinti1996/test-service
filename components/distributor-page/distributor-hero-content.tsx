export function DistributorHeroContent() {
  return (
    <div className="relative z-10 flex w-[700px] max-w-full flex-col gap-6">
      <div className="inline-flex w-fit items-center self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2">
        <span className="whitespace-nowrap text-body-small-medium font-semibold text-primary-subtle-text">
          Distributor Program
        </span>
      </div>

      <h1 className="text-heading-h1-bold text-text-heading">
        Become an Official{" "}
        <span className="text-primary-default">Distributor</span>
      </h1>

      <p className="max-w-[580px] text-body-small-regular text-text-body">
        Distributors are the link between the end customers and the company. As
        an authorized distributor you&apos;ll usually receive direct training from
        the Company on how to use its product &amp; services, and have
        contractual authorization to sell its products and Services.
      </p>
    </div>
  );
}
