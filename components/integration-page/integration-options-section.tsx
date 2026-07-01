import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import { StaggerItem, StaggerReveal } from "@/components/motion";
import { IntegrationOptionCard } from "./integration-option-card";
import { AnimatedSection } from "@/components/motion";
import {
  INTEGRATION_OPTION_FEATURES,
  INTEGRATION_OPTIONS,
} from "./integration-page-config";

function IntegrationOptionFeatureItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-4 px-6">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-3xl bg-primary-subtle-bg">
        <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[15px] font-bold leading-normal text-text-heading">
          {title}
        </p>
        <p className="text-[13px] leading-normal text-text-body-small">
          {description}
        </p>
      </div>
    </div>
  );
}

export type IntegrationOptionsSectionProps = {
  className?: string;
};

export function IntegrationOptionsSection({
  className,
}: IntegrationOptionsSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full", className)}>
      <SiteContainer className="flex flex-col gap-4 px-4 py-6 xl:items-center xl:gap-14 xl:px-20 xl:py-20">
        <SectionHeader
          className="gap-4"
          descriptionClassName="text-base leading-6"
          title={
            <>
              <span className="text-primary-600 xl:text-primary-subtle-text">Flexible</span>
              {" Integration Options"}
            </>
          }
          description="Choose the integration depth that matches your product roadmap."
        />

        <StaggerReveal className="flex w-full flex-col gap-3 xl:flex-row xl:items-stretch xl:gap-6">
          {INTEGRATION_OPTIONS.map((option) => (
            <StaggerItem key={option.badge} className="flex min-w-0 flex-1">
              <IntegrationOptionCard {...option} className="w-full" />
            </StaggerItem>
          ))}
        </StaggerReveal>

        <div className="hidden w-fit items-center justify-center rounded-2xl bg-bg-elevated py-4 shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)] xl:flex">
          {INTEGRATION_OPTION_FEATURES.map((feature, index) => (
            <Fragment key={feature.title}>
              {index > 0 ? (
                <div aria-hidden className="h-10 w-px shrink-0 bg-border-default" />
              ) : null}
              <IntegrationOptionFeatureItem {...feature} />
            </Fragment>
          ))}
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
