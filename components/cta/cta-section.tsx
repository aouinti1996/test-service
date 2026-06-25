import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { CtaCard } from "./cta-card";
import { AnimatedSection } from "@/components/motion";

export type CtaSectionProps = {
  className?: string;
};

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-elevated", className)}>
      <SiteContainer className="p-10">
        <CtaCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
