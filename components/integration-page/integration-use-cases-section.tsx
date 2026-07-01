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
      <SiteContainer className="flex flex-col gap-4 p-4 xl:items-center xl:gap-16 xl:px-20 xl:py-20">
        <SectionHeader
          className="items-start gap-4 text-left xl:items-center xl:text-center"
          title={
            <>
              <span className="text-primary-600 xl:text-primary-subtle-text">Who</span> Is This For?
            </>
          }
          description="Empowering businesses across all industries to offer essential telecom services."
        />

        <StaggerReveal className="flex w-full flex-col gap-3 xl:flex-row xl:items-stretch xl:gap-6">
          {INTEGRATION_USE_CASES.map((useCase) => (
            <StaggerItem key={useCase.title} className="flex min-w-0 flex-1">
              <IntegrationUseCaseCard {...useCase} className="w-full" />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </SiteContainer>
    </AnimatedSection>
  );
}
