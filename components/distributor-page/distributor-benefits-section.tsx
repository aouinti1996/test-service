import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { cn } from "@/lib/utils";
import { StaggerItem, StaggerReveal } from "@/components/motion";
import { DistributorBenefitCard } from "./distributor-benefit-card";
import { DISTRIBUTOR_BENEFITS } from "./distributor-page-config";
import { AnimatedSection } from "@/components/motion";

export type DistributorBenefitsSectionProps = {
  className?: string;
};

export function DistributorBenefitsSection({
  className,
}: DistributorBenefitsSectionProps) {
  const [firstRow, secondRow] = [
    DISTRIBUTOR_BENEFITS.slice(0, 2),
    DISTRIBUTOR_BENEFITS.slice(2, 4),
  ];

  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-surface", className)}>
      <SiteContainer className="flex flex-col gap-14 px-20 py-20">
        <SectionHeader
          title={
            <>
              <span className="text-primary-subtle-text">Why</span> Become a{" "}
              <span className="text-text-heading">Distributor</span>?
            </>
          }
          description="Join the fastest-growing mobile recharge network in Afghanistan and unlock exclusive tools and support for your business."
        />

        <StaggerReveal className="flex flex-col gap-6">
          <div className="flex gap-6">
            {firstRow.map((benefit) => (
              <StaggerItem key={benefit.title} className="min-w-0 flex-1">
                <DistributorBenefitCard
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                  decorationImage={benefit.decorationImage}
                />
              </StaggerItem>
            ))}
          </div>
          <div className="flex gap-6">
            {secondRow.map((benefit) => (
              <StaggerItem key={benefit.title} className="min-w-0 flex-1">
                <DistributorBenefitCard
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                  decorationImage={benefit.decorationImage}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>
      </SiteContainer>
    </AnimatedSection>
  );
}
