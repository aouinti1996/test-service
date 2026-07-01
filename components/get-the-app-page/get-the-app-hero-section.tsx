import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { GetTheAppHeroCard } from "./get-the-app-hero-card";
import { GetTheAppHeroGradientMobile } from "./get-the-app-hero-gradient-mobile";
import { AnimatedSection } from "@/components/motion";

export type GetTheAppHeroSectionProps = {
  className?: string;
};

export function GetTheAppHeroSection({ className }: GetTheAppHeroSectionProps) {
  return (
    <AnimatedSection
      variant="hero"
      className={cn("relative isolate w-full overflow-hidden", className)}
    >
      <GetTheAppHeroGradientMobile />
      <SiteContainer className="relative z-10 xl:p-6">
        <GetTheAppHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
