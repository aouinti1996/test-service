import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { AboutHeroCard } from "./about-hero-card";
import { AnimatedSection } from "@/components/motion";

export type AboutHeroSectionProps = {
  className?: string;
};

export function AboutHeroSection({ className }: AboutHeroSectionProps) {
  return (
    <AnimatedSection variant="hero" className={cn("w-full", className)}>
      <SiteContainer className="p-6">
        <AboutHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
