import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type IntegrationStepCardProps = {
  step: number;
  title: string;
  description: string;
  image: string;
  className?: string;
};

export function IntegrationStepCard({
  step,
  title,
  description,
  image,
  className,
}: IntegrationStepCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-w-0 flex-1 flex-col items-center gap-2",
        className,
      )}
    >
      <div className="absolute left-1/2 top-0 z-10 flex w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary-default p-2">
        <span className="text-body-large-bold text-text-inverse">{step}</span>
      </div>

      <div className="relative size-[316px] shrink-0">
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          aria-hidden
          className="object-cover"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-2 text-center">
        <h3 className="text-heading-h3-bold text-text-heading">{title}</h3>
        <p className="text-body-small-regular text-text-body-small">
          {description}
        </p>
      </div>
    </div>
  );
}

/** Figma node 247:1785 — 24×2px teal dotted segment */
function IntegrationStepConnectorLine() {
  return (
    <div
      aria-hidden
      className="h-[2px] w-6 shrink-0 bg-[radial-gradient(circle,var(--primary-500)_1.25px,transparent_1.25px)] bg-size-[6px_2px] bg-repeat-x"
    />
  );
}

export function IntegrationStepConnector() {
  return (
    <div className="flex h-[240px] w-20 shrink-0 items-center justify-center gap-1">
      <IntegrationStepConnectorLine />
      <div className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-bg-elevated shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
        <Icon icon={ChevronRight} variant="primary" size={16} strokeWidth={2} />
      </div>
      <IntegrationStepConnectorLine />
    </div>
  );
}
