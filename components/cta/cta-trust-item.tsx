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
      <div className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-900 p-2.5">
        <Icon
          icon={icon}
          variant="primary"
          size={19}
          strokeWidth={2}
          className="size-4 xl:size-[19px]"
        />
      </div>

      <div className="flex flex-col gap-0.5 whitespace-nowrap">
        <p className="text-xs font-bold leading-4 text-text-inverse xl:text-body-large-bold">
          {title}
        </p>
        <p className="text-[11px] leading-[14px] text-primary-100 xl:text-caption-large-regular">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
