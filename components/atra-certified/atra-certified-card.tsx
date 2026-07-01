import { AtraCertifiedContent } from "./atra-certified-content";
import { AtraCertifiedGradient } from "./atra-certified-gradient";
import { AtraCertifiedGradientMobile } from "./atra-certified-gradient-mobile";
import { AtraCertifiedVisual } from "./atra-certified-visual";

export function AtraCertifiedCard() {
  return (
    <div className="relative flex w-full flex-col gap-4 overflow-hidden rounded-[24px] border border-border-subtle bg-transparent p-4 xl:flex-row xl:items-center xl:justify-between xl:gap-10 xl:bg-bg-elevated xl:px-20 xl:py-10">
      <AtraCertifiedGradientMobile />
      <div className="hidden xl:block">
        <AtraCertifiedGradient />
      </div>
      <AtraCertifiedContent />
      <AtraCertifiedVisual />
    </div>
  );
}
