import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { ServicesHeroCard } from "./services-hero-card";
import { AnimatedSection } from "@/components/motion";

export type ServicesHeroSectionProps = {
  className?: string;
};

export function ServicesHeroSection({ className }: ServicesHeroSectionProps) {
  return (
    <AnimatedSection variant="hero" className={cn("w-full", className)}>
      <SiteContainer className="p-6">
        <ServicesHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
