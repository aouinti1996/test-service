import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { AboutHeroCard } from "./about-hero-card";
import { AboutHeroGradientMobile } from "./about-hero-gradient-mobile";
import { AnimatedSection } from "@/components/motion";

export type AboutHeroSectionProps = {
  className?: string;
};

export function AboutHeroSection({ className }: AboutHeroSectionProps) {
  return (
    <AnimatedSection
      variant="hero"
      className={cn("relative isolate w-full overflow-hidden", className)}
    >
      <AboutHeroGradientMobile />
      <SiteContainer className="relative z-10 xl:p-6">
        <AboutHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
