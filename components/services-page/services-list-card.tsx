"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type ServicesListCardProps = {
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  backgroundImage: string;
  backgroundImageClassName?: string;
  mobileBackgroundClassName?: string;
  mobileBackgroundWrapperClassName?: string;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
};

function ServiceIcon({ icon }: { icon: LucideIcon }) {
  return (
    <>
      <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-subtle-bg xl:hidden">
        <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
      </div>
      <div className="relative z-10 hidden size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-subtle-bg xl:flex">
        <Icon icon={icon} variant="primary" size={32} strokeWidth={2} />
      </div>
    </>
  );
}

export function ServicesListCard({
  title,
  description,
  benefits,
  icon,
  backgroundImage,
  backgroundImageClassName,
  mobileBackgroundClassName,
  mobileBackgroundWrapperClassName,
  isExpanded,
  onToggle,
  className,
}: ServicesListCardProps) {
  return (
    <article className={cn("w-full", className)}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className={cn(
          "relative flex w-full overflow-hidden rounded-2xl border bg-bg-elevated text-left transition-colors",
          "flex-col gap-4 p-4 xl:flex-row xl:gap-8 xl:p-12",
          isExpanded
            ? "border-primary-default xl:items-start"
            : "border-border-subtle xl:items-center",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute overflow-hidden opacity-40 xl:hidden",
            mobileBackgroundWrapperClassName ??
              "right-[-1px] top-[-39.8px] h-[150px] w-[200px]",
          )}
        >
          {mobileBackgroundClassName ? (
            <img
              src={backgroundImage}
              alt=""
              className={cn("max-w-none", mobileBackgroundClassName)}
            />
          ) : (
            <Image
              src={backgroundImage}
              alt=""
              fill
              unoptimized
              className="object-cover object-center"
            />
          )}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-85px] right-[-117px] hidden h-[420px] w-[560px] xl:block"
        >
          <div className="relative size-full overflow-hidden">
            {backgroundImageClassName ? (
              <img
                src={backgroundImage}
                alt=""
                className={cn("pointer-events-none", backgroundImageClassName)}
              />
            ) : (
              <Image
                src={backgroundImage}
                alt=""
                fill
                unoptimized
                className="pointer-events-none object-cover object-center"
              />
            )}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 xl:hidden">
          <ServiceIcon icon={icon} />
          <h3 className="text-base font-bold leading-6 text-text-heading">{title}</h3>
        </div>

        <div className="hidden shrink-0 xl:block">
          <ServiceIcon icon={icon} />
        </div>

        <div className="relative z-10 flex flex-col gap-4 xl:max-w-[400px]">
          <h3 className="hidden text-heading-h2-bold text-text-heading xl:block">
            {title}
          </h3>

          {isExpanded ? (
            <div className="text-sm leading-5 text-text-body-small xl:text-body-large-regular">
              <p className="xl:hidden">{description}</p>
              <p className="mt-2 xl:hidden">Key benefits:</p>
              {benefits.map((benefit) => (
                <p key={benefit} className="xl:hidden">
                  {benefit}
                </p>
              ))}

              <div className="hidden xl:block">
                <p>{description}</p>
                <p className="mt-4">Key benefits:</p>
                <ul className="mt-0 list-disc pl-6">
                  {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </button>
    </article>
  );
}
