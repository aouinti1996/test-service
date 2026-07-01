import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { AboutMissionCard } from "./about-mission-card";
import { AnimatedSection } from "@/components/motion";
import {
  ABOUT_HISTORY_PARAGRAPHS,
  ABOUT_MISSION,
  ABOUT_VISION,
} from "./about-page-config";

export type AboutMissionSectionProps = {
  className?: string;
};

export function AboutMissionSection({ className }: AboutMissionSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-surface", className)}>
      <SiteContainer className="px-4 pb-4 pt-10 xl:px-20 xl:py-10">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-10">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <AboutMissionCard
              title={ABOUT_MISSION.title}
              description={ABOUT_MISSION.description}
              icon={ABOUT_MISSION.icon}
            />
            <AboutMissionCard
              title={ABOUT_VISION.title}
              description={ABOUT_VISION.description}
              icon={ABOUT_VISION.icon}
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 xl:gap-6">
            <div className="inline-flex w-fit items-center self-start rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2">
              <span className="whitespace-nowrap text-sm font-medium leading-5 text-primary-600 xl:text-body-small-medium xl:font-semibold xl:text-primary-subtle-text">
                Our History
              </span>
            </div>
            <div className="text-justify text-sm leading-5 text-text-heading xl:text-body-large-regular">
              {ABOUT_HISTORY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
