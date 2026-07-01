import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { cn } from "@/lib/utils";
import { ServicesGrid } from "./services-grid";
import { AnimatedSection } from "@/components/motion";

export type ServicesSectionProps = {
  className?: string;
};

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("relative z-10 w-full bg-bg-surface", className)}>
      <SiteContainer className="flex flex-col gap-4 px-4 pb-10 pt-0 xl:gap-10 xl:px-20 xl:py-20">
        <SectionHeader
          className="items-start text-left xl:items-center xl:text-center"
          title={
            <>
              Everything You Need,{" "}
              <span className="text-primary-subtle-text">In One App</span>
            </>
          }
          description="Active Services provides a unified platform for Afghanistan's mobile ecosystem, trusted by millions for reliability and speed."
        />
        <ServicesGrid />
      </SiteContainer>
    </AnimatedSection>
  );
}
