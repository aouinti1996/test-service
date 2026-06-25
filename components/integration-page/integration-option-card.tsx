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
        "flex min-w-0 flex-1 items-center gap-4 rounded-2xl border border-state-success-border bg-bg-elevated p-4",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="inline-flex w-fit items-center rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2">
          <span className="text-body-small-medium font-semibold text-primary-subtle-text">
            {badge}
          </span>
        </div>

        <h3 className="text-heading-h2-bold text-text-heading">{title}</h3>
        <p className="text-body-large-regular text-text-body-small">
          {description}
        </p>

        <Link
          href={ctaHref}
          className="inline-flex w-fit items-center gap-1 rounded-full bg-primary-default px-3 py-2 text-body-small-medium text-text-inverse shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)] transition-colors hover:bg-primary-hover"
        >
          {ctaLabel}
          <Icon icon={ChevronRight} variant="inverse" size={16} strokeWidth={2} />
        </Link>
      </div>

      <div className="relative h-[172px] w-[138px] shrink-0 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          aria-hidden
          className="object-cover"
        />
      </div>
    </article>
  );
}
