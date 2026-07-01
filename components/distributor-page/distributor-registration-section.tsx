import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { cn } from "@/lib/utils";
import { DistributorRegistrationForm } from "./distributor-registration-form";
import { AnimatedSection } from "@/components/motion";

export type DistributorRegistrationSectionProps = {
  className?: string;
};

export function DistributorRegistrationSection({
  className,
}: DistributorRegistrationSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full", className)}>
      <SiteContainer className="flex flex-col gap-4 px-4 pb-10 pt-4 xl:items-center xl:gap-16 xl:px-20 xl:py-20">
        <SectionHeader
          className="items-start gap-4 text-left xl:items-center xl:text-center"
          title={
            <>
              Distributor{" "}
              <span className="text-primary-600 xl:text-primary-subtle-text">
                Registration Form
              </span>
            </>
          }
          description="To become a distributor, fill the below form and Active Services will contact you."
        />
        <DistributorRegistrationForm />
      </SiteContainer>
    </AnimatedSection>
  );
}
