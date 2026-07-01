import { RegulatoryInfoCard } from "./regulatory-info-card";

export function AtraCertifiedContent() {
  return (
    <div className="relative z-10 flex w-full max-w-full shrink-0 flex-col gap-4 xl:w-[620px] xl:gap-10">
      <div className="flex w-full flex-col gap-4 xl:gap-6">
        <h2 className="text-xl font-bold leading-7 text-text-heading xl:text-heading-h1-bold">
          Built for Afghanistan,{" "}
          <span className="text-primary-subtle-text">Approved by ATRA</span>
        </h2>

        <p className="text-sm leading-5 text-text-body-small xl:text-body-large-regular xl:text-text-body">
          Active Services is a locally developed platform designed to meet the
          unique needs of the Afghan market. Our infrastructure is built for
          stability, ensuring your transactions are processed instantly even
          during peak times.
        </p>

        <p className="text-sm leading-5 text-text-body-small xl:text-body-large-regular xl:text-text-body">
          As a fully licensed provider, we adhere to all regulations set by the
          Afghanistan Telecom Regulatory Authority, providing a secure and legal
          environment for all your telecom needs.
        </p>
      </div>

      <RegulatoryInfoCard license="License No. AS-4290-2024" />
    </div>
  );
}
