import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type CoverageCommunityCardProps = {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
  imageClassName?: string;
  className?: string;
};

export function CoverageCommunityCard({
  title,
  description,
  features,
  icon,
  image,
  imageClassName,
  className,
}: CoverageCommunityCardProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#e8edf5] bg-bg-elevated shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      <div className="relative h-[180px] w-full overflow-hidden p-6">
        <div className="absolute left-6 top-6 flex size-10 items-center justify-center rounded-[10px] bg-primary-subtle-bg shadow-[0px_2px_4px_rgba(0,0,0,0.08)]">
          <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt=""
            aria-hidden
            className={cn(
              "pointer-events-none max-w-none",
              imageClassName ?? "size-full object-cover object-center",
            )}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 p-8">
        <h3 className="text-heading-h3-bold text-text-heading">{title}</h3>
        <p className="text-body-small-regular text-text-secondary">
          {description}
        </p>
        <ul className="flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <CheckCircle2
                className="size-[18px] shrink-0 text-icon-primary"
                strokeWidth={2}
                aria-hidden
              />
              <span className="text-body-small-medium text-text-heading">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
