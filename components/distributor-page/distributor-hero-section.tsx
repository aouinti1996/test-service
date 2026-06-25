import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { DistributorHeroCard } from "./distributor-hero-card";
import { AnimatedSection } from "@/components/motion";

export type DistributorHeroSectionProps = {
  className?: string;
};

export function DistributorHeroSection({ className }: DistributorHeroSectionProps) {
  return (
    <AnimatedSection variant="hero" className={cn("w-full", className)}>
      <SiteContainer className="p-6">
        <DistributorHeroCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
