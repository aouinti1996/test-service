import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { CoverageHeroCard } from "./coverage-hero-card";
import { CoverageHeroGradientMobile } from "./coverage-hero-gradient-mobile";
import { AnimatedSection } from "@/components/motion";

export type CoverageHeroSectionProps = {
  className?: string;
};

export function CoverageHeroSection({ className }: CoverageHeroSectionProps) {
  return (
    <AnimatedSection
      variant="hero"
      className={cn("relative isolate w-full overflow-hidden", className)}
    >
      <CoverageHeroGradientMobile />
      <SiteContainer className="relative z-10 xl:p-6">
        <CoverageHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
