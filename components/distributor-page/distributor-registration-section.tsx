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
    <AnimatedSection variant="default" className={cn("w-full ", className)}>
      <SiteContainer className="flex flex-col items-center gap-16 px-20 py-20">
        <SectionHeader
          title={
            <>
              Distributor{" "}
              <span className="text-primary-subtle-text">Registration Form</span>
            </>
          }
          description="To become a distributor, fill the below form and Active Services will contact you."
        />
        <DistributorRegistrationForm />
      </SiteContainer>
    </AnimatedSection>
  );
}
