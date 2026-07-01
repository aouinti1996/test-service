import { Navbar } from "@/components/navbar";
import { HeroGradient } from "@/components/hero/hero-gradient";
import { DistributorHeroContent } from "./distributor-hero-content";
import { DistributorHeroVisual } from "./distributor-hero-visual";

export function DistributorHeroCard() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-transparent xl:rounded-[24px] xl:border xl:border-border-subtle xl:bg-bg-elevated xl:pb-20">
      <HeroGradient />
      <DistributorHeroVisual variant="desktop" />

      <div className="relative z-10 flex flex-col gap-10 px-4 py-6 xl:gap-[120px] xl:px-0 xl:py-0">
        <div className="hidden shrink-0 xl:block">
          <Navbar
            variant="embedded"
            activeHref="/become-a-distributor"
            className="shrink-0"
          />
        </div>

        <div className="flex flex-col gap-4 xl:px-20">
          <DistributorHeroContent />
          <DistributorHeroVisual variant="mobile" />
        </div>
      </div>
    </div>
  );
}
