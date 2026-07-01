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
      <SiteContainer className="flex flex-col gap-4 px-4 pb-10 pt-10 xl:items-center xl:gap-10 xl:px-20 xl:py-20">
        <SectionHeader
          size="default"
          className="items-start gap-4 text-left xl:items-center xl:text-center"
          title={
            <>
              We Only{" "}
              <span className="text-primary-600 xl:text-primary-subtle-text">
                Offer the Best
              </span>
            </>
          }
          description="Active Services provides a unified platform for Afghanistan's mobile ecosystem, trusted by millions for reliability and speed."
        />

        <div className="flex w-full max-w-[800px] flex-col gap-3 xl:gap-4">
          {SERVICES_PAGE_ITEMS.map((service) => (
            <ServicesListCard
              key={service.id}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              icon={service.icon}
              backgroundImage={service.backgroundImage}
              backgroundImageClassName={service.backgroundImageClassName}
              mobileBackgroundClassName={service.mobileBackgroundClassName}
              mobileBackgroundWrapperClassName={
                service.mobileBackgroundWrapperClassName
              }
              isExpanded={activeId === service.id}
              onToggle={() => setActiveId(service.id)}
            />
          ))}
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
