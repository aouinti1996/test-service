"use client";

import { StaggerItem, StaggerReveal } from "@/components/motion";
import { ServiceCard } from "./service-card";
import { SERVICES } from "./service-config";

export function ServicesGrid() {
  return (
    <StaggerReveal className="grid w-full grid-cols-1 gap-3 xl:grid-cols-2 xl:gap-6">
      {SERVICES.map((service) => (
        <StaggerItem key={service.title} className="min-w-0">
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
