import { AtraCertifiedContent } from "./atra-certified-content";
import { AtraCertifiedGradient } from "./atra-certified-gradient";
import { AtraCertifiedVisual } from "./atra-certified-visual";

export function AtraCertifiedCard() {
  return (
    <div className="relative flex w-full items-center justify-between gap-10 overflow-hidden rounded-[24px] border border-border-subtle bg-bg-elevated px-20 py-10">
      <AtraCertifiedGradient />
      <AtraCertifiedContent />
      <AtraCertifiedVisual />
    </div>
  );
}
