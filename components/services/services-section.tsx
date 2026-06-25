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
    <AnimatedSection variant="default" className={cn("w-full bg-bg-surface", className)}>
      <SiteContainer className="flex flex-col gap-10 px-20 py-20">
        <SectionHeader
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
