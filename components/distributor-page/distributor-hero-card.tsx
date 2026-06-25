import { Navbar } from "@/components/navbar";
import { HeroGradient } from "@/components/hero/hero-gradient";
import { DistributorHeroContent } from "./distributor-hero-content";
import { DistributorHeroVisual } from "./distributor-hero-visual";

export function DistributorHeroCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-border-subtle bg-bg-elevated pb-20">
      <HeroGradient />
      <DistributorHeroVisual />

      <div className="relative z-10 flex flex-col gap-[120px]">
        <Navbar
          variant="embedded"
          activeHref="/become-a-distributor"
          className="shrink-0"
        />

        <div className="px-20">
          <DistributorHeroContent />
        </div>
      </div>
    </div>
  );
}
