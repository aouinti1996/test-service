import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { DistributorHeroCard } from "./distributor-hero-card";
import { DistributorHeroGradientMobile } from "./distributor-hero-gradient-mobile";
import { AnimatedSection } from "@/components/motion";

export type DistributorHeroSectionProps = {
  className?: string;
};

export function DistributorHeroSection({ className }: DistributorHeroSectionProps) {
  return (
    <AnimatedSection
      variant="hero"
      className={cn("relative isolate w-full overflow-hidden", className)}
    >
      <DistributorHeroGradientMobile />
      <SiteContainer className="relative z-10 xl:p-6">
        <DistributorHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
