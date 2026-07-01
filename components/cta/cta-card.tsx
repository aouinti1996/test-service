import { CtaBackground } from "./cta-background";
import { CtaContent } from "./cta-content";
import { CtaPhone } from "./cta-phone";

export function CtaCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-[#0d3b22] xl:rounded-[32px]">
      <div className="relative flex flex-col overflow-visible rounded-[24px] px-4 py-4 xl:h-[600px] xl:overflow-hidden xl:flex-row xl:items-center xl:justify-between xl:rounded-[40px] xl:px-20 xl:py-[60px]">
        <CtaBackground />
        <CtaContent />
        <CtaPhone className="relative z-10 hidden xl:flex" />
      </div>
    </div>
  );
}
