import { Fragment } from "react";
import { CTA_TRUST_ITEMS } from "./cta-config";
import { CtaTrustItemCard } from "./cta-trust-item";

export function CtaTrustRow() {
  return (
    <div className="flex items-center gap-8">
      {CTA_TRUST_ITEMS.map((item, index) => (
        <Fragment key={item.title}>
          {index > 0 ? (
            <div aria-hidden className="h-10 w-px shrink-0 bg-white/13" />
          ) : null}
          <CtaTrustItemCard {...item} />
        </Fragment>
      ))}
    </div>
  );
}
