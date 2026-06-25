"use client";

import { StaggerItem, StaggerReveal } from "@/components/motion";
import { ContactInfoCard } from "./contact-info-card";
import { CONTACT_INFO } from "./contact-page-config";

export function ContactInfoCards() {
  return (
    <StaggerReveal className="absolute inset-x-0 top-[213px] z-20 flex gap-6 p-20">
      {CONTACT_INFO.map((item) => (
        <StaggerItem key={item.label} className="min-w-0 flex-1">
          <ContactInfoCard {...item} />
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}
