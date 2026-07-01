"use client";

import { StaggerItem, StaggerReveal } from "@/components/motion";
import { TestimonialCard } from "./testimonial-card";
import { TESTIMONIALS } from "./testimonials-config";

export function TestimonialsGrid() {
  return (
    <StaggerReveal className="flex w-full snap-x snap-mandatory items-start gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] xl:snap-none xl:gap-8 xl:overflow-visible xl:pb-0 [&::-webkit-scrollbar]:hidden">
      {TESTIMONIALS.map((testimonial) => (
        <StaggerItem
          key={testimonial.name}
          className="shrink-0 snap-start xl:min-w-0 xl:flex-1"
        >
          <TestimonialCard {...testimonial} />
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}
