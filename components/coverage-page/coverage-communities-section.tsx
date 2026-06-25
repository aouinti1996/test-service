import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { cn } from "@/lib/utils";
import { CoverageCommunityCard } from "./coverage-community-card";
import { COVERAGE_COMMUNITIES } from "./coverage-page-config";
import { AnimatedSection } from "@/components/motion";

export type CoverageCommunitiesSectionProps = {
  className?: string;
};

export function CoverageCommunitiesSection({
  className,
}: CoverageCommunitiesSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-elevated", className)}>
      <SiteContainer className="flex flex-col gap-16 px-20 py-20">
        <SectionHeader
          title="Built for Urban and Local Communities"
          description="Designed to serve busy cities, neighborhood retailers, and growing districts across Afghanistan."
        />

        <div className="flex w-full gap-6">
          {COVERAGE_COMMUNITIES.map((community) => (
            <CoverageCommunityCard
              key={community.title}
              title={community.title}
              description={community.description}
              features={community.features}
              icon={community.icon}
              image={community.image}
              imageClassName={community.imageClassName}
            />
          ))}
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
