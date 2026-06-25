"use client";

import { StaggerItem, StaggerReveal } from "@/components/motion";
import { ServiceCard } from "./service-card";
import { SERVICES } from "./service-config";

export function ServicesGrid() {
  return (
    <StaggerReveal className="flex w-full items-start gap-6">
      {SERVICES.map((service) => (
        <StaggerItem key={service.title} className="min-w-0 flex-1">
          <ServiceCard
            title={service.title}
            description={service.description}
            href={service.href}
            icon={service.icon}
            backgroundImage={service.backgroundImage}
            backgroundImageClassName={service.backgroundImageClassName}
          />
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}
