import { RegulatoryInfoCard } from "./regulatory-info-card";

export function AtraCertifiedContent() {
  return (
    <div className="relative z-10 flex w-[620px] max-w-full shrink-0 flex-col gap-10">
      <div className="flex w-full flex-col gap-6">
        <h2 className="text-heading-h1-bold text-text-heading">
          Built for Afghanistan,{" "}
          <span className="text-primary-subtle-text">Approved by ATRA</span>
        </h2>

        <div className="flex flex-col gap-6 text-body-large-regular text-text-body-small">
          <p>
            Active Services is a locally developed platform designed to meet the
            unique needs of the Afghan market. Our infrastructure is built for
            stability, ensuring your transactions are processed instantly even
            during peak times.
          </p>
          <p>
            As a fully licensed provider, we adhere to all regulations set by the
            Afghanistan Telecom Regulatory Authority, providing a secure and
            legal environment for all your telecom needs.
          </p>
        </div>
      </div>

      <RegulatoryInfoCard license="License No. AS-4290-2024" />
    </div>
  );
}
