import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { cn } from "@/lib/utils";
import { OperatorsGrid } from "./operators-grid";
import { AnimatedSection } from "@/components/motion";

export type OperatorsSectionProps = {
  className?: string;
};

export function OperatorsSection({ className }: OperatorsSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-surface", className)}>
      <SiteContainer className="flex flex-col items-center gap-16 px-20 py-20">
        <SectionHeader
          title={
            <>
              We Support All{" "}
              <span className="text-primary-subtle-text">Major Operators</span>
            </>
          }
          description="Instant connectivity across every GSM network in the country."
        />

        <OperatorsGrid />

        <p className="whitespace-nowrap text-center text-body-large-regular text-text-secondary">
          Serving all 34 provinces of Afghanistan with reliable uptime.
        </p>
      </SiteContainer>
    </AnimatedSection>
  );
}
