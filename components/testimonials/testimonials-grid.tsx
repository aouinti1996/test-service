"use client";

import { StaggerItem, StaggerReveal } from "@/components/motion";
import { TestimonialCard } from "./testimonial-card";
import { TESTIMONIALS } from "./testimonials-config";

export function TestimonialsGrid() {
  return (
    <StaggerReveal className="flex w-full items-start gap-8">
      {TESTIMONIALS.map((testimonial) => (
        <StaggerItem key={testimonial.name} className="min-w-0 flex-1">
          <TestimonialCard {...testimonial} />
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}
