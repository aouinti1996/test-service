import { Navbar } from "@/components/navbar";
import { HeroGradient } from "@/components/hero/hero-gradient";
import { CoverageHeroContent } from "./coverage-hero-content";
import { CoverageHeroVisual } from "./coverage-hero-visual";

export function CoverageHeroCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-border-subtle bg-bg-elevated pb-20">
      <HeroGradient />
      <CoverageHeroVisual />

      <div className="relative z-10 flex flex-col gap-[120px]">
        <Navbar variant="embedded" activeHref="/coverage" className="shrink-0" />

        <div className="px-20">
          <CoverageHeroContent />
        </div>
      </div>
    </div>
  );
}
