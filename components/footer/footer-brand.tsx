import { Check } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { FOOTER_FEATURES } from "./footer-config";

export type FooterBrandProps = {
  className?: string;
};

export function FooterBrand({ className }: FooterBrandProps) {
  return (
    <div
      className={cn(
        "flex w-full shrink-0 flex-col gap-4 xl:w-[300px] xl:gap-8",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <Logo />
        <p className="text-caption-large-medium text-text-body-small xl:text-body-small-medium">
          Afghanistan&apos;s most trusted mobile recharge platform for retailers
          and agents. Fast, secure, and reliable services — all in one place.
        </p>
      </div>

      <ul className="flex flex-col gap-1 xl:gap-3">
        {FOOTER_FEATURES.map((feature) => (
          <li key={feature} className="flex items-center gap-1 xl:gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center rounded">
              <Check
                className="size-3.5 text-primary-subtle-text"
                strokeWidth={2.5}
                aria-hidden
              />
            </span>
            <span className="text-[11px] font-medium leading-[14px] text-text-body-small xl:text-body-small-medium xl:whitespace-nowrap">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
