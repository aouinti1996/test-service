import { Navbar } from "@/components/navbar";
import { HeroGradient } from "@/components/hero/hero-gradient";
import { IntegrationHeroContent } from "./integration-hero-content";
import { IntegrationHeroVisual } from "./integration-hero-visual";

export function IntegrationHeroCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-border-subtle bg-bg-elevated pb-20">
      <HeroGradient />
      <IntegrationHeroVisual />

      <div className="relative z-10 flex flex-col gap-[120px]">
        <Navbar variant="embedded" activeHref="/integration" className="shrink-0" />

        <div className="px-20">
          <IntegrationHeroContent />
        </div>
      </div>
    </div>
  );
}
