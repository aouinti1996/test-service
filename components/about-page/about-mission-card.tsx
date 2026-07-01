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
        "flex w-full flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-elevated p-4 xl:p-6",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-subtle-bg xl:size-16 xl:rounded-2xl">
          <Icon icon={icon} variant="primary" size={20} strokeWidth={2} className="xl:hidden" />
          <Icon
            icon={icon}
            variant="primary"
            size={32}
            strokeWidth={2}
            className="hidden xl:block"
          />
        </div>
        <h3 className="text-xl font-bold leading-7 text-text-heading xl:text-heading-h2-bold">
          {title}
        </h3>
      </div>
      <p className="text-sm leading-5 text-text-body xl:text-body-large-regular">
        {description}
      </p>
    </article>
  );
}
