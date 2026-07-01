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
        "flex w-full flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-elevated p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.04)]",
        "xl:min-w-0 xl:flex-1 xl:gap-4 xl:self-stretch xl:p-7",
        className,
      )}
    >
      <div className="flex size-[52px] items-center justify-center rounded-[14px] bg-primary-subtle-bg">
        <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold leading-normal text-text-heading">
          {title}
        </h3>
        <p className="text-sm leading-[1.6] text-text-secondary xl:text-body-small-regular">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-icon-primary transition-colors hover:text-primary-default xl:text-body-small-medium"
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
        "relative w-full overflow-hidden rounded-2xl",
        "aspect-[520/156] xl:h-[156px]",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/coverage-page/services-map.png"
        alt=""
        aria-hidden
        className="absolute left-0 top-[-42.95%] h-[166.67%] w-full max-w-none object-cover xl:hidden"
      />
      <Image
        src="/coverage-page/services-map.png"
        alt=""
        fill
        unoptimized
        aria-hidden
        className="hidden object-cover object-center xl:block"
        style={{ objectPosition: "center 30%" }}
      />
    </div>
  );
}
