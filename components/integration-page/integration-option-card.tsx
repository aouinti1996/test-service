import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type IntegrationOptionCardProps = {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  className?: string;
};

export function IntegrationOptionCard({
  badge,
  title,
  description,
  ctaLabel,
  ctaHref,
  image,
  className,
}: IntegrationOptionCardProps) {
  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-1 items-center gap-4 rounded-2xl border border-state-success-border bg-bg-elevated p-4",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-2 self-stretch xl:gap-4">
        <div className="inline-flex w-fit items-center rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2">
          <span className="whitespace-nowrap text-xs font-medium leading-4 text-primary-subtle-text xl:text-body-small-medium xl:font-semibold">
            {badge}
          </span>
        </div>

        <h3 className="whitespace-nowrap text-xl font-bold leading-7 text-text-heading xl:whitespace-normal xl:text-heading-h2-bold">
          {title}
        </h3>
        <p className="text-sm leading-5 text-text-body-small xl:text-body-large-regular">
          {description}
        </p>

        <Link
          href={ctaHref}
          className="mt-auto inline-flex w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-primary-default px-3 py-2 text-sm font-medium leading-5 text-text-inverse shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)] transition-colors hover:bg-primary-hover xl:text-body-small-medium"
        >
          {ctaLabel}
          <Icon
            icon={ChevronRight}
            variant="inverse"
            size={16}
            strokeWidth={2}
            className="shrink-0"
          />
        </Link>
      </div>

      <div className="relative flex w-[138px] shrink-0 self-stretch items-center justify-center overflow-hidden">
        <div className="relative h-[172px] w-[138px]">
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
