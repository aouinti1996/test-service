import type { LucideIcon } from "lucide-react";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type IntegrationInfrastructureCardProps = {
  title: string;
  description: string;
  chip: string;
  icon: LucideIcon;
  image: string;
  imageClassName?: string;
  className?: string;
};

export function IntegrationInfrastructureCard({
  title,
  description,
  chip,
  icon,
  image,
  imageClassName,
  className,
}: IntegrationInfrastructureCardProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 flex-col overflow-hidden rounded-[20px] border border-border-subtle bg-bg-elevated shadow-[0px_10px_30px_0px_rgba(0,0,0,0.03)]",
        className,
      )}
    >
      <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden">
        {imageClassName ? (
          <img src={image} alt="" aria-hidden className={imageClassName} />
        ) : (
          <Image
            src={image}
            alt=""
            fill
            unoptimized
            aria-hidden
            className="object-cover object-center"
          />
        )}

        <div className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-xl bg-primary-subtle-bg shadow-[0px_2px_4px_rgba(0,0,0,0.08)]">
          <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-7">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-heading-h3-bold text-text-heading">{title}</h3>
          <p className="text-body-small-regular text-text-secondary">
            {description}
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-[32px] bg-primary-subtle-bg px-3.5 py-2">
          <Icon icon={CircleCheck} variant="primary" size={16} strokeWidth={2} />
          <span className="text-body-small-medium font-semibold text-primary-subtle-text">
            {chip}
          </span>
        </div>
      </div>
    </article>
  );
}
