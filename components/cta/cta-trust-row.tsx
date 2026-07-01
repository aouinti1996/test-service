import { Fragment } from "react";
import { CTA_TRUST_ITEMS } from "./cta-config";
import { CtaTrustItemCard } from "./cta-trust-item";
import { cn } from "@/lib/utils";

export type CtaTrustRowProps = {
  className?: string;
};

export function CtaTrustRow({ className }: CtaTrustRowProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-start justify-start gap-4 xl:flex-row xl:items-center xl:gap-8",
        className,
      )}
    >
      {CTA_TRUST_ITEMS.map((item, index) => (
        <Fragment key={item.title}>
          {index > 0 ? (
            <div
              aria-hidden
              className="hidden h-10 w-px shrink-0 bg-white/13 xl:block"
            />
          ) : null}
          <CtaTrustItemCard {...item} />
        </Fragment>
      ))}
    </div>
  );
}
