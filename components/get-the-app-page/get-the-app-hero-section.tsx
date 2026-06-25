import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { GetTheAppHeroCard } from "./get-the-app-hero-card";
import { AnimatedSection } from "@/components/motion";

export type GetTheAppHeroSectionProps = {
  className?: string;
};

export function GetTheAppHeroSection({ className }: GetTheAppHeroSectionProps) {
  return (
    <AnimatedSection variant="hero" className={cn("w-full", className)}>
      <SiteContainer className="p-6">
        <GetTheAppHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
