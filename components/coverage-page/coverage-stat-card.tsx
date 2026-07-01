import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type CoverageStatCardProps = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function CoverageStatCard({
  value,
  label,
  description,
  icon,
  className,
}: CoverageStatCardProps) {
  return (
    <article
      className={cn(
        "flex w-full rounded-[20px] border border-primary-subtle-bg bg-bg-elevated shadow-[0px_4px_24px_0px_rgba(0,191,166,0.06)]",
        "flex-row items-start gap-6 p-4",
        "xl:flex-col xl:gap-6 xl:p-8 xl:shadow-[0px_4px_24px_0px_rgba(0,191,166,0.06)]",
        className,
      )}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-subtle-bg shadow-[0px_0px_40px_rgba(181,246,236,0.5)] xl:size-16 xl:rounded-2xl">
        <Icon icon={icon} variant="primary" size={20} strokeWidth={2} className="xl:hidden" />
        <Icon
          icon={icon}
          variant="primary"
          size={32}
          strokeWidth={2}
          className="hidden xl:block"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-1 xl:gap-2">
        <p className="text-[40px] font-bold leading-[48px] text-primary-default xl:text-heading-h1-bold">
          {value}
        </p>
        <p className="text-base font-bold leading-6 text-text-heading xl:text-body-large-bold">
          {label}
        </p>
        <span className="h-0.5 w-8 rounded-sm bg-primary-default" />
        <p className="text-sm leading-5 text-text-secondary xl:text-body-small-regular">
          {description}
        </p>
      </div>
    </article>
  );
}
