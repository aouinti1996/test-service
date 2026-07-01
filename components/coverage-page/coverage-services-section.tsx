import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import {
  CoverageServiceMiniCard,
  CoverageServicesMap,
} from "./coverage-service-mini-card";
import { COVERAGE_SERVICES } from "./coverage-page-config";
import { AnimatedSection } from "@/components/motion";

export type CoverageServicesSectionProps = {
  className?: string;
};

export function CoverageServicesSection({
  className,
}: CoverageServicesSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-elevated", className)}>
      <SiteContainer className="flex flex-col gap-4 p-4 xl:flex-row xl:items-center xl:gap-10 xl:px-20 xl:py-20">
        <div className="flex w-full shrink-0 flex-col gap-8 xl:w-[520px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold leading-8 text-text-heading xl:text-heading-h1-bold">
              Services Available{" "}
              <span className="text-primary-600 xl:text-primary-subtle-text">
                Across the Country
              </span>
            </h2>
            <p className="text-sm leading-5 text-text-body xl:text-body-large-regular">
              Wherever Active Services operates, users and retailers can access
              the tools they need to stay connected, serve customers, and manage
              payments more efficiently.
            </p>
          </div>
          <CoverageServicesMap className="hidden xl:block" />
        </div>

        <CoverageServicesMap className="xl:hidden" />

        <div className="flex w-full flex-col gap-3 xl:min-w-0 xl:flex-1 xl:flex-row xl:gap-5">
          {COVERAGE_SERVICES.map((service) => (
            <CoverageServiceMiniCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
              className={cn(service.mobileOnly && "xl:hidden")}
            />
          ))}
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
