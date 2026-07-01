import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type ContactInfoCardProps = {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
  className?: string;
};

export function ContactInfoCardRow({
  label,
  value,
  hint,
  icon,
  className,
}: ContactInfoCardProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-subtle-bg">
        <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-sm font-medium leading-5 text-text-secondary">{label}</p>
        <p className="text-base font-bold leading-6 text-text-heading">{value}</p>
        <p className="text-xs leading-4 text-text-secondary">{hint}</p>
      </div>
    </div>
  );
}

export function ContactInfoCard({
  label,
  value,
  hint,
  icon,
  className,
}: ContactInfoCardProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-6 rounded-2xl bg-bg-elevated p-8 shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)]",
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-primary-subtle-bg">
        <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-body-small-medium text-text-secondary">{label}</p>
        <p className="text-heading-h3-bold text-text-heading">{value}</p>
        <p className="text-body-small-regular text-text-secondary">{hint}</p>
      </div>
    </article>
  );
}
