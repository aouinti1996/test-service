import Image from "next/image";
import type { FooterOperator } from "./footer-config";
import { cn } from "@/lib/utils";

export type FooterOperatorPillProps = FooterOperator & {
  className?: string;
};

export function FooterOperatorPill({
  name,
  logo,
  logoWidth,
  logoHeight,
  logoClassName,
  className,
}: FooterOperatorPillProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-2 rounded-lg border border-border-subtle px-4 py-2",
        className,
      )}
    >
      <span className="flex h-4 shrink-0 items-center">
        <Image
          src={logo}
          alt=""
          width={logoWidth}
          height={logoHeight}
          aria-hidden
          className={cn("h-4 w-auto max-w-10 object-contain object-left", logoClassName)}
        />
      </span>
      <span className="whitespace-nowrap text-caption-large-bold text-text-heading">
        {name}
      </span>
    </div>
  );
}
