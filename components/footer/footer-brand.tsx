import { Check } from "lucide-react";
import { Logo } from "@/components/logo";
import { FOOTER_FEATURES } from "./footer-config";

export function FooterBrand() {
  return (
    <div className="flex w-[300px] shrink-0 flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Logo />
        <p className="text-body-small-medium text-text-body-small">
          Afghanistan&apos;s most trusted mobile recharge platform for retailers
          and agents. Fast, secure, and reliable services — all in one place.
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {FOOTER_FEATURES.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center rounded">
              <Check
                className="size-3.5 text-primary-subtle-text"
                strokeWidth={2.5}
                aria-hidden
              />
            </span>
            <span className="whitespace-nowrap text-body-small-medium text-text-body-small">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
