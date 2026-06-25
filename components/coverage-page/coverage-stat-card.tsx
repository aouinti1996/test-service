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
        "flex min-w-0 flex-1 flex-col gap-6 rounded-[20px] border border-primary-subtle-bg bg-bg-elevated p-8 shadow-[0px_4px_24px_0px_rgba(0,191,166,0.06)]",
        className,
      )}
    >
      <div className="flex size-16 items-center justify-center rounded-2xl bg-primary-subtle-bg shadow-[0px_0px_40px_rgba(181,246,236,0.5)]">
        <Icon icon={icon} variant="primary" size={32} strokeWidth={2} />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-heading-h1-bold text-primary-default">{value}</p>
        <p className="text-body-large-bold text-text-heading">{label}</p>
        <span className="h-0.5 w-8 rounded-sm bg-primary-default" />
        <p className="text-body-small-regular text-text-secondary">
          {description}
        </p>
      </div>
    </article>
  );
}
