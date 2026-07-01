import { Fragment } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
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
    <Fragment>
      {/* Figma 663:9689 — mobile step row */}
      <div
        className={cn(
          "relative flex w-full shrink-0 items-center gap-2 xl:hidden",
          className,
        )}
      >
        <div className="relative size-40 shrink-0">
          <Image
            src={image}
            alt=""
            fill
            unoptimized
            aria-hidden
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 text-center">
          <h3 className="text-base font-bold leading-6 text-text-heading">{title}</h3>
          <p className="text-xs leading-4 text-text-body-small">{description}</p>
        </div>

        <div className="absolute left-0 top-1/2 flex w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary-default p-2">
          <span className="text-base font-bold leading-6 text-text-inverse">{step}</span>
        </div>
      </div>

      {/* Desktop — original flex-1 column layout */}
      <div
        className={cn(
          "relative hidden min-w-0 flex-1 flex-col items-center gap-2 xl:flex",
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
          <p className="text-body-small-regular text-text-body-small">{description}</p>
        </div>
      </div>
    </Fragment>
  );
}

/** Figma 247:1785 / 663:9796 — 24×2px teal dotted segment */
function IntegrationStepConnectorLine() {
  return (
    <div
      aria-hidden
      className="h-[2px] w-6 shrink-0 bg-[radial-gradient(circle,var(--primary-500)_1.25px,transparent_1.25px)] bg-size-[6px_2px] bg-repeat-x"
    />
  );
}

/** Figma 663:9796 — vertical dotted segment between steps */
function IntegrationStepConnectorLineVertical() {
  return (
    <div
      aria-hidden
      className="h-6 w-[2px] shrink-0 bg-[radial-gradient(circle,var(--primary-500)_1.25px,transparent_1.25px)] bg-size-[2px_6px] bg-repeat-y"
    />
  );
}

/** Figma 247:1784 — desktop horizontal connector */
export function IntegrationStepConnector() {
  return (
    <div className="hidden h-[240px] w-20 shrink-0 items-center justify-center gap-1 xl:flex xl:shrink-0">
      <IntegrationStepConnectorLine />
      <div className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-bg-elevated shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
        <Icon icon={ChevronRight} variant="primary" size={16} strokeWidth={2} />
      </div>
      <IntegrationStepConnectorLine />
    </div>
  );
}

/** Figma 663:9795 — 80×160px vertical connector under step image */
export function IntegrationStepConnectorVertical() {
  return (
    <div className="flex h-20 w-40 shrink-0 flex-col items-center justify-center gap-1 xl:hidden">
      <IntegrationStepConnectorLineVertical />
      <div className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-bg-elevated shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
        <Icon icon={ChevronDown} variant="primary" size={16} strokeWidth={2} />
      </div>
      <IntegrationStepConnectorLineVertical />
    </div>
  );
}
