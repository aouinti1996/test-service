"use client";

import { Fragment } from "react";
import { StaggerItem, StaggerReveal } from "@/components/motion";
import { ContactInfoCard, ContactInfoCardRow } from "./contact-info-card";
import { CONTACT_INFO } from "./contact-page-config";

export function ContactInfoCards() {
  return (
    <>
      <div className="absolute left-1/2 top-[156px] z-20 w-[calc(100%-2rem)] max-w-[343px] -translate-x-1/2 xl:hidden">
        <article className="flex flex-col gap-4 rounded-2xl bg-bg-elevated p-4 shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)]">
          {CONTACT_INFO.map((item, index) => (
            <Fragment key={item.label}>
              <ContactInfoCardRow {...item} />
              {index < CONTACT_INFO.length - 1 ? (
                <div aria-hidden className="h-px w-full bg-border-subtle" />
              ) : null}
            </Fragment>
          ))}
        </article>
      </div>

      <StaggerReveal className="absolute inset-x-0 top-[213px] z-20 hidden gap-6 p-20 xl:flex">
        {CONTACT_INFO.map((item) => (
          <StaggerItem key={item.label} className="min-w-0 flex-1">
            <ContactInfoCard {...item} />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </>
  );
}
