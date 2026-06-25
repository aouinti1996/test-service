import { Navbar } from "@/components/navbar";
import { HeroGradient } from "@/components/hero/hero-gradient";
import { AboutHeroContent } from "./about-hero-content";
import { AboutHeroVisual } from "./about-hero-visual";

export function AboutHeroCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-border-subtle bg-bg-elevated pb-20">
      <HeroGradient />
      <AboutHeroVisual />

      <div className="relative z-10 flex flex-col gap-[120px]">
        <Navbar variant="embedded" activeHref="/about" className="shrink-0" />

        <div className="px-20">
          <AboutHeroContent />
        </div>
      </div>
    </div>
  );
}
