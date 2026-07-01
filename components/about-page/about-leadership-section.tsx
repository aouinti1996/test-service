import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { AboutLeaderCard } from "./about-leader-card";
import { ABOUT_LEADERS } from "./about-page-config";
import { AnimatedSection } from "@/components/motion";

export type AboutLeadershipSectionProps = {
  className?: string;
};

export function AboutLeadershipSection({ className }: AboutLeadershipSectionProps) {
  return (
    <AnimatedSection
      variant="default"
      className={cn(
        "w-full bg-gradient-to-b from-transparent to-bg-elevated",
        className,
      )}
    >
      <SiteContainer className="flex flex-col gap-4 px-4 py-4 xl:flex-row xl:items-center xl:gap-16 xl:px-20 xl:py-20">
        <div className="flex w-full shrink-0 flex-col gap-4 text-left xl:w-[608px] xl:text-center">
          <h2 className="text-2xl font-bold leading-8 text-text-heading xl:text-heading-h1-bold">
            Our{" "}
            <span className="text-primary-600 xl:text-primary-subtle-text">
              Leadership Team
            </span>
          </h2>
          <p className="text-base leading-6 text-text-body-small xl:text-body-large-regular">
            A group of experienced professionals dedicated to transforming telecom
            services in the country.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 xl:min-w-0 xl:flex-1 xl:flex-row xl:gap-8">
          {ABOUT_LEADERS.map((leader) => (
            <AboutLeaderCard
              key={leader.name}
              name={leader.name}
              role={leader.role}
              image={leader.image}
            />
          ))}
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
