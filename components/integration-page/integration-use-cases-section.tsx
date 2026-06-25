import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { cn } from "@/lib/utils";
import { StaggerItem, StaggerReveal } from "@/components/motion";
import { IntegrationUseCaseCard } from "./integration-use-case-card";
import { INTEGRATION_USE_CASES } from "./integration-page-config";
import { AnimatedSection } from "@/components/motion";

export type IntegrationUseCasesSectionProps = {
  className?: string;
};

export function IntegrationUseCasesSection({
  className,
}: IntegrationUseCasesSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-base-white", className)}>
      <SiteContainer className="flex flex-col items-center gap-16 px-20 py-20">
        <SectionHeader
          title={
            <>
              <span className="text-primary-subtle-text">Who</span> Is This For?
            </>
          }
          description="Empowering businesses across all industries to offer essential telecom services."
        />

        <StaggerReveal className="flex w-full gap-6">
          {INTEGRATION_USE_CASES.map((useCase) => (
            <StaggerItem key={useCase.title} className="min-w-0 flex-1">
              <IntegrationUseCaseCard {...useCase} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </SiteContainer>
    </AnimatedSection>
  );
}
