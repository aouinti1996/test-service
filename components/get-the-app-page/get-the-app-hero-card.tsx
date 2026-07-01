import { Navbar } from "@/components/navbar";
import { HeroGradient } from "@/components/hero/hero-gradient";
import { GetTheAppHeroContent } from "./get-the-app-hero-content";
import { GetTheAppHeroVisual } from "./get-the-app-hero-visual";

export function GetTheAppHeroCard() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-transparent xl:rounded-[24px] xl:border xl:border-border-subtle xl:bg-bg-elevated xl:pb-20">
      <HeroGradient />
      <GetTheAppHeroVisual variant="desktop" />

      <div className="relative z-10 flex flex-col gap-4 px-4 pt-6 pb-0 xl:gap-[120px] xl:px-0 xl:py-0">
        <div className="hidden shrink-0 xl:block">
          <Navbar variant="embedded" activeHref="/get-the-app" className="shrink-0" />
        </div>

        <div className="flex flex-col gap-4 xl:px-20">
          <GetTheAppHeroContent />
          <GetTheAppHeroVisual variant="mobile" />
        </div>
      </div>
    </div>
  );
}
