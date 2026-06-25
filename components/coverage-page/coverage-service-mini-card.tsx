import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type CoverageServiceMiniCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  className?: string;
};

export function CoverageServiceMiniCard({
  title,
  description,
  href,
  icon,
  className,
}: CoverageServiceMiniCardProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-4 self-stretch rounded-2xl border border-border-subtle bg-bg-elevated p-7 shadow-[0px_4px_10px_rgba(0,0,0,0.04)]",
        className,
      )}
    >
      <div className="flex size-[52px] items-center justify-center rounded-[14px] bg-primary-subtle-bg">
        <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-[18px] font-bold leading-normal text-text-heading">
          {title}
        </h3>
        <p className="text-body-small-regular leading-[1.6] text-text-secondary">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-body-small-medium text-icon-primary transition-colors hover:text-primary-default"
      >
        Learn more
        <ArrowRight className="size-3.5" strokeWidth={2} aria-hidden />
      </Link>
    </article>
  );
}

export type CoverageServicesMapProps = {
  className?: string;
};

export function CoverageServicesMap({ className }: CoverageServicesMapProps) {
  return (
    <div
      className={cn(
        "relative h-[156px] w-full overflow-hidden rounded-2xl",
        className,
      )}
    >
      <Image
        src="/coverage-page/services-map.png"
        alt=""
        fill
        unoptimized
        aria-hidden
        className="object-cover object-center"
        style={{ objectPosition: "center 30%" }}
      />
    </div>
  );
}
