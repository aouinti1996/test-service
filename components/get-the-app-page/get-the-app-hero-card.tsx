import { Navbar } from "@/components/navbar";
import { HeroGradient } from "@/components/hero/hero-gradient";
import { ServicesHeroVisual } from "@/components/services-page/services-hero-visual";
import { GetTheAppHeroContent } from "./get-the-app-hero-content";

export function GetTheAppHeroCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-border-subtle bg-bg-elevated pb-20">
      <HeroGradient />
      <ServicesHeroVisual />

      <div className="relative z-10 flex flex-col gap-[120px]">
        <Navbar variant="embedded" activeHref="/get-the-app" className="shrink-0" />

        <div className="px-20">
          <GetTheAppHeroContent />
        </div>
      </div>
    </div>
  );
}
