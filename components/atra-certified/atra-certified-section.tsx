import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { AtraCertifiedCard } from "./atra-certified-card";
import { AnimatedSection } from "@/components/motion";

export type AtraCertifiedSectionProps = {
  className?: string;
};

export function AtraCertifiedSection({ className }: AtraCertifiedSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-surface", className)}>
      <SiteContainer className="p-6">
        <AtraCertifiedCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
