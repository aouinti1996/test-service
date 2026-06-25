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
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
};

export function ServicesListCard({
  title,
  description,
  benefits,
  icon,
  backgroundImage,
  backgroundImageClassName,
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
          "relative flex w-full gap-8 overflow-hidden rounded-2xl border bg-bg-elevated p-12 text-left transition-colors",
          isExpanded
            ? "items-start border-primary-default"
            : "items-center border-border-subtle",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-85px] right-[-117px] h-[420px] w-[560px]"
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

        <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-subtle-bg">
          <Icon icon={icon} variant="primary" size={32} strokeWidth={2} />
        </div>

        <div className="relative z-10 flex max-w-[400px] flex-col gap-4">
          <h3 className="text-heading-h2-bold text-text-heading">{title}</h3>

          {isExpanded ? (
            <div className="text-body-large-regular text-text-body-small">
              <p>{description}</p>
              <p className="mt-4">Key benefits:</p>
              <ul className="mt-0 list-disc pl-6">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </button>
    </article>
  );
}
