import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { cn } from "@/lib/utils";
import { TestimonialsGrid } from "./testimonials-grid";
import { AnimatedSection } from "@/components/motion";

export type TestimonialsSectionProps = {
  className?: string;
};

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full xl:bg-bg-elevated", className)}>
      <SiteContainer className="flex flex-col items-start gap-4 px-4 pb-10 pt-0 xl:items-center xl:gap-16 xl:px-20 xl:py-20">
        <SectionHeader
          size="compact"
          className="items-start text-left xl:items-center xl:text-center"
          title={
            <>
              <span className="text-primary-subtle-text">Trusted by Retailers</span>
              {" Across Afghanistan"}
            </>
          }
        />

        <TestimonialsGrid />
      </SiteContainer>
    </AnimatedSection>
  );
}
