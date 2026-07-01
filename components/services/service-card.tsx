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
        "relative flex h-full min-w-0 flex-col gap-4 overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated p-4 xl:gap-8 xl:p-12",
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

      <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-subtle-bg xl:size-16 xl:rounded-2xl">
        <Icon icon={icon} variant="primary" size={24} strokeWidth={2} className="xl:hidden" />
        <Icon
          icon={icon}
          variant="primary"
          size={32}
          strokeWidth={2}
          className="hidden xl:block"
        />
      </div>

      <div className="relative z-10 flex max-w-[400px] flex-col gap-2 xl:gap-4">
        <h3 className="text-base font-bold leading-6 text-text-heading xl:text-heading-h2-bold">
          {title}
        </h3>
        <p className="text-sm leading-5 text-text-body-small xl:text-body-large-regular">
          {description}
        </p>
      </div>

      <TextLink
        href={href}
        className="relative z-10 self-start whitespace-nowrap text-base font-medium leading-6 xl:text-body-large-medium"
      >
        Learn more
      </TextLink>
    </article>
  );
}
