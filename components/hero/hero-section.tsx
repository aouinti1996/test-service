import { cn } from "@/lib/utils";
import { SiteContainer } from "@/components/layout/site-container";
import { HeroCard } from "./hero-card";
import { HeroGradientMobile } from "./hero-gradient-mobile";
import { HeroStatsBar } from "./hero-stats-bar";
import { AnimatedSection } from "@/components/motion";

export type HeroSectionProps = {
  className?: string;
};

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <AnimatedSection
      variant="hero"
      className={cn(
        "relative isolate w-full overflow-hidden bg-transparent xl:h-screen xl:bg-bg-surface",
        className,
      )}
    >
      <HeroGradientMobile />
      <SiteContainer className="relative z-10 flex min-h-0 flex-col px-4 pb-10 pt-6 xl:h-full xl:gap-6 xl:p-6">
        <HeroCard />
        <HeroStatsBar className="hidden shrink-0 xl:flex" />
      </SiteContainer>
    </AnimatedSection>
  );
}
