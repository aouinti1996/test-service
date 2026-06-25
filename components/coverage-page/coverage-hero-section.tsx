import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { CoverageHeroCard } from "./coverage-hero-card";
import { AnimatedSection } from "@/components/motion";

export type CoverageHeroSectionProps = {
  className?: string;
};

export function CoverageHeroSection({ className }: CoverageHeroSectionProps) {
  return (
    <AnimatedSection variant="hero" className={cn("w-full", className)}>
      <SiteContainer className="p-6">
        <CoverageHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
