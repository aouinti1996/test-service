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
        "flex h-full min-w-0 flex-1 items-center overflow-hidden rounded-2xl border border-[#e5e7eb] bg-bg-subtle",
        "xl:flex-col xl:items-stretch xl:border-border-subtle",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-2 p-4 xl:order-2 xl:w-full xl:gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-[22px] border border-[#e5e7eb] bg-bg-elevated xl:hidden">
          <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
        </div>

        <h3 className="whitespace-nowrap text-base font-bold leading-6 text-text-heading xl:hidden">
          {title}
        </h3>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-[22px] border border-border-subtle bg-bg-elevated">
            <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
          </div>
          <h3 className="text-body-large-bold text-text-heading">{title}</h3>
        </div>

        <p className="text-sm leading-5 text-text-body-small xl:text-body-small-regular">
          {description}
        </p>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-center self-stretch xl:order-1 xl:h-[200px] xl:w-full xl:flex-none">
        <div className="relative size-[200px] shrink-0">
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
    </article>
  );
}
