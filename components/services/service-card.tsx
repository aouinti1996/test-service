import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/icon";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  backgroundImage: string;
  backgroundImageClassName?: string;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
  backgroundImage,
  backgroundImageClassName,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "relative flex min-w-0 flex-1 flex-col gap-8 overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated p-12",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-85px] right-[-117.33px] h-[420px] w-[560px] opacity-40"
      >
        <div className="relative size-full overflow-hidden">
          {backgroundImageClassName ? (
            <img
              src={backgroundImage}
              alt=""
              className={cn("pointer-events-none", backgroundImageClassName)}
            />
          ) : (
            <Image
              src={backgroundImage}
              alt=""
              fill
              unoptimized
              className="pointer-events-none object-cover object-center"
            />
          )}
        </div>
      </div>

      <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-subtle-bg">
        <Icon icon={icon} variant="primary" size={32} strokeWidth={2} />
      </div>

      <div className="relative z-10 flex max-w-[400px] flex-col gap-4">
        <h3 className="text-heading-h2-bold text-text-heading">{title}</h3>
        <p className="text-body-large-regular text-text-body-small">
          {description}
        </p>
      </div>

      <TextLink href={href} className="relative z-10 self-start">
        Learn more
      </TextLink>
    </article>
  );
}
