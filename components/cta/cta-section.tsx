import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { CtaCard } from "./cta-card";
import { AnimatedSection } from "@/components/motion";

export type CtaSectionProps = {
  className?: string;
  containerClassName?: string;
};

export function CtaSection({ className, containerClassName }: CtaSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-surface", className)}>
      <SiteContainer className={cn("px-4 pb-10 pt-0 xl:p-10", containerClassName)}>
        <CtaCard />
      </SiteContainer>
    </AnimatedSection>
  );
}
