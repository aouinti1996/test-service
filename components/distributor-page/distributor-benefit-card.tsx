import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type DistributorBenefitCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  decorationImage: string;
  className?: string;
};

export function DistributorBenefitCard({
  title,
  description,
  icon,
  decorationImage,
  className,
}: DistributorBenefitCardProps) {
  return (
    <article
      className={cn(
        "relative flex min-w-0 flex-1 flex-col gap-6 overflow-hidden rounded-[20px] border border-border-subtle bg-bg-elevated p-10 shadow-[0px_10px_30px_0px_rgba(0,0,0,0.03)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-px -top-px size-[190px]">
        <Image
          src={decorationImage}
          alt=""
          fill
          unoptimized
          aria-hidden
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-primary-subtle-bg">
        <Icon icon={icon} variant="primary" size={32} strokeWidth={2} />
      </div>

      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-heading-h3-bold text-text-heading">{title}</h3>
        <p className="text-body-small-regular text-text-secondary">
          {description}
        </p>
      </div>
    </article>
  );
}
