import { Navbar } from "@/components/navbar";
import { HeroGradient } from "@/components/hero/hero-gradient";
import { ServicesHeroContent } from "./services-hero-content";
import { ServicesHeroVisual } from "./services-hero-visual";

export function ServicesHeroCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-border-subtle bg-bg-elevated pb-20">
      <HeroGradient />
      <ServicesHeroVisual />

      <div className="relative z-10 flex flex-col gap-[120px]">
        <Navbar variant="embedded" activeHref="/services" className="shrink-0" />

        <div className="px-20">
          <ServicesHeroContent />
        </div>
      </div>
    </div>
  );
}
