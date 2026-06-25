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
      <SiteContainer className="flex items-center gap-10 px-20 py-20">
        <div className="flex w-[520px] shrink-0 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-heading-h1-bold text-text-heading">
              Services Available{" "}
              <span className="text-primary-subtle-text">Across the Country</span>
            </h2>
            <p className="text-body-large-regular text-text-body">
              Wherever Active Services operates, users and retailers can access
              the tools they need to stay connected, serve customers, and manage
              payments more efficiently.
            </p>
          </div>
          <CoverageServicesMap />
        </div>

        <div className="flex min-w-0 flex-1 gap-5">
          {COVERAGE_SERVICES.map((service) => (
            <CoverageServiceMiniCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
