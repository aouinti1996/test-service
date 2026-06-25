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
    <AnimatedSection variant="default" className={cn("w-full bg-bg-elevated", className)}>
      <SiteContainer className="flex flex-col items-center gap-16 px-20 py-20">
        <SectionHeader
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
