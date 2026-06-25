import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { StaggerItem, StaggerReveal } from "@/components/motion";
import { CoverageDotGrid } from "./coverage-dot-grid";
import { COVERAGE_STATS } from "./coverage-page-config";
import { CoverageStatCard } from "./coverage-stat-card";
import { AnimatedSection } from "@/components/motion";

export type CoverageGlanceSectionProps = {
  className?: string;
};

export function CoverageGlanceSection({ className }: CoverageGlanceSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("relative w-full overflow-hidden bg-bg-surface", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-205px] left-1/2 h-[1303px] w-[2484px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,252,255,0) 0%, rgba(244,255,252,1) 100%)",
        }}
      />
      <CoverageDotGrid className="pointer-events-none absolute left-8 top-20" />
      <CoverageDotGrid className="pointer-events-none absolute bottom-6 right-8" />

      <SiteContainer className="relative flex flex-col items-center gap-14 px-20 pb-16 pt-20">
        <div className="flex w-full flex-col items-center gap-5 text-center">
          <h2 className="w-full text-heading-h1-bold text-text-heading">
            <span className="text-primary-subtle-text">Coverage</span> at a Glance
          </h2>
          <p className="max-w-[620px] text-body-large-regular text-text-body-small">
            Reliable digital access across Afghanistan&apos;s mobile ecosystem,
            built to serve customers, retailers, and agents nationwide.
          </p>
        </div>

        <StaggerReveal className="flex w-full gap-5">
          {COVERAGE_STATS.map((stat) => (
            <StaggerItem key={stat.label} className="min-w-0 flex-1">
              <CoverageStatCard
                value={stat.value}
                label={stat.label}
                description={stat.description}
                icon={stat.icon}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </SiteContainer>
    </AnimatedSection>
  );
}
