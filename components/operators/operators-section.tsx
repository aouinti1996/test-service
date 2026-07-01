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
      <SiteContainer className="flex flex-col items-center gap-4 px-4 pb-10 pt-0 xl:gap-16 xl:px-20 xl:py-20">
        <SectionHeader
          size="compact"
          className="items-start text-left [&_p]:text-sm [&_p]:leading-5 [&_p]:text-text-body-small xl:items-center xl:text-center xl:[&_p]:text-body-large-regular"
          title={
            <>
              We Support All{" "}
              <span className="text-primary-subtle-text">Major Operators</span>
            </>
          }
          description="Instant connectivity across every GSM network in the country."
        />

        <OperatorsGrid />

        <p className="w-full text-center text-[11px] leading-[14px] text-text-secondary xl:whitespace-nowrap xl:text-body-large-regular">
          Serving all 34 provinces of Afghanistan with reliable uptime.
        </p>
      </SiteContainer>
    </AnimatedSection>
  );
}
