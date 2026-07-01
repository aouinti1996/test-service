import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { IntegrationHeroCard } from "./integration-hero-card";
import { IntegrationHeroGradientMobile } from "./integration-hero-gradient-mobile";
import { AnimatedSection } from "@/components/motion";

export type IntegrationHeroSectionProps = {
  className?: string;
};

export function IntegrationHeroSection({ className }: IntegrationHeroSectionProps) {
  return (
    <AnimatedSection
      variant="hero"
      className={cn("relative isolate w-full overflow-hidden", className)}
    >
      <IntegrationHeroGradientMobile />
      <SiteContainer className="relative z-10 xl:p-6">
        <IntegrationHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
