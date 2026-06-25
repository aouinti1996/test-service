import { Navbar } from "@/components/navbar";
import { HeroContent } from "./hero-content";
import { HeroGradient } from "./hero-gradient";
import { HeroPhone } from "./hero-phone";

export function HeroCard() {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[24px] border border-border-subtle bg-bg-elevated pb-20">
      <HeroGradient />
      <HeroPhone />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-[120px]">
        <Navbar variant="embedded" activeHref="/" className="shrink-0" />

        <div className="px-20">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}
