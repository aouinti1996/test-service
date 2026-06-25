import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type CoverageMatterCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function CoverageMatterCard({
  title,
  description,
  icon,
  className,
}: CoverageMatterCardProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 gap-5 rounded-2xl bg-bg-elevated p-7 shadow-[0px_4px_10px_rgba(0,191,166,0.08)]",
        className,
      )}
    >
      <div className="flex size-[52px] shrink-0 items-center justify-center rounded-xl bg-primary-subtle-bg">
        <Icon icon={icon} variant="primary" size={28} strokeWidth={2} />
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <h3 className="text-[17px] font-bold leading-normal text-text-heading">
          {title}
        </h3>
        <p className="text-body-small-regular leading-[1.6] text-text-secondary">
          {description}
        </p>
      </div>
    </article>
  );
}
