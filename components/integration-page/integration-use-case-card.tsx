import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type IntegrationUseCaseCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  className?: string;
};

export function IntegrationUseCaseCard({
  title,
  description,
  icon,
  image,
  className,
}: IntegrationUseCaseCardProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-subtle",
        className,
      )}
    >
      <div className="flex h-[200px] items-center justify-center">
        <div className="relative size-[200px]">
          <Image
            src={image}
            alt=""
            fill
            unoptimized
            aria-hidden
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-[22px] border border-border-subtle bg-bg-elevated">
            <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
          </div>
          <h3 className="text-body-large-bold text-text-heading">{title}</h3>
        </div>
        <p className="text-body-small-regular text-text-body-small">
          {description}
        </p>
      </div>
    </article>
  );
}
