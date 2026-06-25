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
    <AnimatedSection variant="default"
      className={cn(
        "w-full bg-gradient-to-b from-transparent to-bg-elevated",
        className,
      )}
    >
      <SiteContainer className="flex items-center gap-16 px-20 py-20">
        <div className="flex w-[608px] shrink-0 flex-col gap-4 text-center">
          <h2 className="text-heading-h1-bold text-text-heading">
            Our <span className="text-primary-subtle-text">Leadership Team</span>
          </h2>
          <p className="text-body-large-regular text-text-body-small">
            A group of experienced professionals dedicated to transforming telecom
            services in the country.
          </p>
        </div>

        <div className="flex min-w-0 flex-1 gap-8">
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
