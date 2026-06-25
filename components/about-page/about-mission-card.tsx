import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type AboutMissionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function AboutMissionCard({
  title,
  description,
  icon,
  className,
}: AboutMissionCardProps) {
  return (
    <article
      className={cn(
        "flex w-full flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-elevated p-6",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-subtle-bg">
          <Icon icon={icon} variant="primary" size={32} strokeWidth={2} />
        </div>
        <h3 className="text-heading-h2-bold text-text-heading">{title}</h3>
      </div>
      <p className="text-body-large-regular text-text-body">{description}</p>
    </article>
  );
}
