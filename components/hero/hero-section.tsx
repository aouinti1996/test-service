import { cn } from "@/lib/utils";
import { SiteContainer } from "@/components/layout/site-container";
import { HeroCard } from "./hero-card";
import { HeroStatsBar } from "./hero-stats-bar";
import { AnimatedSection } from "@/components/motion";

export type HeroSectionProps = {
  className?: string;
};

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <AnimatedSection variant="hero" className={cn("h-screen w-full", className)}>
      <SiteContainer className="flex h-full min-h-0 flex-col gap-6 p-6">
        <HeroCard />
        <HeroStatsBar className="shrink-0" />
      </SiteContainer>
    </AnimatedSection>
  );
}
