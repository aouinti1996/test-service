"use client";

import { useState } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { cn } from "@/lib/utils";
import { SERVICES_PAGE_ITEMS } from "./services-page-config";
import { ServicesListCard } from "./services-list-card";
import { AnimatedSection } from "@/components/motion";

export type ServicesListSectionProps = {
  className?: string;
};

export function ServicesListSection({ className }: ServicesListSectionProps) {
  const [activeId, setActiveId] = useState(SERVICES_PAGE_ITEMS[0]?.id ?? "");

  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-surface", className)}>
      <SiteContainer className="flex flex-col items-center gap-10 px-20 py-20">
        <SectionHeader
          title={
            <>
              We Only <span className="text-primary-subtle-text">Offer the Best</span>
            </>
          }
          description="Active Services provides a unified platform for Afghanistan's mobile ecosystem, trusted by millions for reliability and speed."
        />

        <div className="flex w-full max-w-[800px] flex-col gap-4">
          {SERVICES_PAGE_ITEMS.map((service) => (
            <ServicesListCard
              key={service.id}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              icon={service.icon}
              backgroundImage={service.backgroundImage}
              backgroundImageClassName={service.backgroundImageClassName}
              isExpanded={activeId === service.id}
              onToggle={() => setActiveId(service.id)}
            />
          ))}
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
