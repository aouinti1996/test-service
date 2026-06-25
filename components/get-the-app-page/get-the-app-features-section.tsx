import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { ServicesGrid } from "@/components/services/services-grid";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/motion";

export type GetTheAppFeaturesSectionProps = {
  className?: string;
};

export function GetTheAppFeaturesSection({
  className,
}: GetTheAppFeaturesSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("relative w-full overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-186px] left-1/2 h-[1365px] w-[2602px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251, 252, 255, 0) 0%, rgba(244, 255, 252, 1) 100%)",
        }}
      />

      <SiteContainer className="relative flex flex-col gap-16 px-20 py-20">
        <SectionHeader
          title={
            <>
              What You{" "}
              <span className="text-primary-subtle-text">Can Do</span>
            </>
          }
          description="Everything you need in one simple app."
        />
        <ServicesGrid />
      </SiteContainer>
    </AnimatedSection>
  );
}
