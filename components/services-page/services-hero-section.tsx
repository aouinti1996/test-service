import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { ServicesHeroCard } from "./services-hero-card";
import { ServicesHeroGradientMobile } from "./services-hero-gradient-mobile";
import { AnimatedSection } from "@/components/motion";

export type ServicesHeroSectionProps = {
  className?: string;
};

export function ServicesHeroSection({ className }: ServicesHeroSectionProps) {
  return (
    <AnimatedSection
      variant="hero"
      className={cn("relative isolate w-full overflow-hidden", className)}
    >
      <ServicesHeroGradientMobile />
      <SiteContainer className="relative z-10 xl:p-6">
        <ServicesHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
