import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { IntegrationInfrastructureCard } from "./integration-infrastructure-card";
import { INTEGRATION_INFRASTRUCTURE } from "./integration-page-config";
import { AnimatedSection } from "@/components/motion";

export type IntegrationInfrastructureSectionProps = {
  className?: string;
};

export function IntegrationInfrastructureSection({
  className,
}: IntegrationInfrastructureSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("relative w-full overflow-hidden", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
        <span className="absolute left-10 top-[60px] text-xl font-light text-primary-default/20">
          +
        </span>
        <span className="absolute right-20 top-20 text-base font-light text-primary-default/20">
          +
        </span>
        <span className="absolute left-[60px] top-80 text-base font-light text-primary-default/15">
          +
        </span>
      </div>

      <SiteContainer className="relative flex flex-col gap-4 px-4 pt-10 pb-6 xl:gap-16 xl:px-20 xl:py-20">
        <div className="flex w-full flex-col items-start gap-4 text-left xl:items-center xl:gap-5 xl:text-center">
          <h2 className="text-[24px] font-bold leading-8 text-text-heading xl:text-heading-h1-bold">
            Powerful Infrastructure.
            <br />
            Built for{" "}
            <span className="text-primary-600 xl:text-primary-default">Afghanistan.</span>
          </h2>
          <p className="max-w-[640px] text-base leading-6 text-text-body-small xl:text-body-large-regular xl:text-text-body-small">
            The infrastructure that powers Afghanistan&apos;s leading mobile
            service ecosystem.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 xl:flex-row xl:gap-6">
          {INTEGRATION_INFRASTRUCTURE.map((item) => (
            <IntegrationInfrastructureCard key={item.title} {...item} />
          ))}
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
