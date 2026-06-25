import { CtaBackground } from "./cta-background";
import { CtaContent } from "./cta-content";
import { CtaPhone } from "./cta-phone";

export function CtaCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[32px] bg-[#0d3b22]">
      <div className="relative flex h-[600px] items-center justify-between overflow-hidden rounded-[40px] px-20 py-[60px]">
        <CtaBackground />
        <CtaContent />
        <CtaPhone className="relative z-10" />
      </div>
    </div>
  );
}
