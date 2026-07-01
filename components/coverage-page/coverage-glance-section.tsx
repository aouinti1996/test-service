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
    <AnimatedSection
      variant="default"
      className={cn("relative w-full overflow-hidden bg-bg-surface", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-205px] left-1/2 hidden h-[1303px] w-[2484px] -translate-x-1/2 xl:block"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,252,255,0) 0%, rgba(244,255,252,1) 100%)",
        }}
      />
      <CoverageDotGrid className="pointer-events-none absolute right-0 top-0 opacity-10 xl:hidden" />
      <CoverageDotGrid className="pointer-events-none absolute left-8 top-20 hidden xl:grid" />
      <CoverageDotGrid className="pointer-events-none absolute bottom-6 right-8 hidden xl:grid" />

      <SiteContainer className="relative flex flex-col items-center gap-4 px-4 pb-4 pt-10 xl:gap-14 xl:px-20 xl:pb-16 xl:pt-20">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="w-full text-2xl font-bold leading-8 text-text-heading xl:text-heading-h1-bold">
            <span className="text-primary-600 xl:text-primary-subtle-text">
              Coverage
            </span>{" "}
            at a Glance
          </h2>
          <p className="max-w-[620px] text-base leading-6 text-text-body-small xl:text-body-large-regular">
            Reliable digital access across Afghanistan&apos;s mobile ecosystem,
            built to serve customers, retailers, and agents nationwide.
          </p>
        </div>

        <StaggerReveal className="flex w-full flex-col gap-3 xl:flex-row xl:gap-5">
          {COVERAGE_STATS.map((stat) => (
            <StaggerItem key={stat.label} className="min-w-0 xl:flex-1">
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
