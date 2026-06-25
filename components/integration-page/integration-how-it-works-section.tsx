import { Fragment } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import {
  INTEGRATION_HOW_IT_WORKS_FEATURES,
  INTEGRATION_STEPS,
} from "./integration-page-config";
import { AnimatedSection } from "@/components/motion";
import {
  IntegrationStepCard,
  IntegrationStepConnector,
} from "./integration-step-card";

export type IntegrationHowItWorksSectionProps = {
  className?: string;
};

export function IntegrationHowItWorksSection({
  className,
}: IntegrationHowItWorksSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-base-white", className)}>
      <SiteContainer className="flex flex-col items-center gap-16 px-20 py-20">
        <SectionHeader
          title={
            <>
              How It <span className="text-primary-subtle-text">Works</span>
            </>
          }
          description="Get started in minutes and scale your business with our simple integration process."
        />

        <div className="flex w-full items-start">
          {INTEGRATION_STEPS.map((step, index) => (
            <Fragment key={step.step}>
              <IntegrationStepCard {...step} />
              {index < INTEGRATION_STEPS.length - 1 ? (
                <IntegrationStepConnector />
              ) : null}
            </Fragment>
          ))}
        </div>

        <div className="flex items-center gap-4 rounded-lg bg-primary-subtle-bg px-6 py-3">
          {INTEGRATION_HOW_IT_WORKS_FEATURES.map((feature, index) => (
            <Fragment key={feature.label}>
              {index > 0 ? (
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-full bg-primary-subtle-text/40"
                />
              ) : null}
              <div className="flex items-center gap-2.5">
                {"icon" in feature && feature.icon ? (
                  <Icon
                    icon={feature.icon}
                    variant="primary"
                    size={20}
                    strokeWidth={2}
                  />
                ) : null}
                <span className="text-body-small-bold text-primary-subtle-text">
                  {feature.label}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
