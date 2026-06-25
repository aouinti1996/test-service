import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { IntegrationHeroCard } from "./integration-hero-card";
import { AnimatedSection } from "@/components/motion";

export type IntegrationHeroSectionProps = {
  className?: string;
};

export function IntegrationHeroSection({ className }: IntegrationHeroSectionProps) {
  return (
    <AnimatedSection variant="hero" className={cn("w-full", className)}>
      <SiteContainer className="p-6">
        <IntegrationHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
