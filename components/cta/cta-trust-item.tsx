import { Icon } from "@/components/icon";
import type { CtaTrustItem } from "./cta-config";
import { cn } from "@/lib/utils";

export type CtaTrustItemProps = CtaTrustItem & {
  className?: string;
};

export function CtaTrustItemCard({
  icon,
  title,
  subtitle,
  className,
}: CtaTrustItemProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex shrink-0 rounded-full bg-primary-900 p-2.5">
        <Icon icon={icon} variant="primary" size={19} strokeWidth={2} />
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="whitespace-nowrap text-body-large-bold text-text-inverse">
          {title}
        </p>
        <p className="whitespace-nowrap text-caption-large-regular text-primary-100">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
