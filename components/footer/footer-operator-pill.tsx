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
  mobileLogo,
  mobileLogoWidth,
  mobileLogoHeight,
  mobileLogoObjectFit = "cover",
  className,
}: FooterOperatorPillProps) {
  const mobileWidth = mobileLogoWidth ?? logoWidth;
  const mobileHeight = mobileLogoHeight ?? logoHeight;
  const mobileSrc = mobileLogo ?? logo;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-2 rounded-lg border border-border-subtle px-4 py-2",
        className,
      )}
    >
      <div
        className="relative shrink-0 overflow-hidden xl:hidden"
        style={{ width: mobileWidth, height: mobileHeight }}
      >
        <Image
          src={mobileSrc}
          alt=""
          fill
          unoptimized
          sizes={`${mobileWidth}px`}
          className={cn(
            mobileLogoObjectFit === "contain" ? "object-contain" : "object-cover",
            "object-center",
          )}
        />
      </div>

      <span
        className="relative hidden h-4 shrink-0 items-center xl:flex"
        style={{ width: logoWidth }}
      >
        <Image
          src={logo}
          alt=""
          width={logoWidth}
          height={logoHeight}
          aria-hidden
          className={cn(
            "h-4 max-w-none object-contain object-left",
            logoClassName,
          )}
          style={{ width: logoWidth, height: logoHeight }}
        />
      </span>

      <span className="whitespace-nowrap text-caption-large-bold text-text-heading">
        {name}
      </span>
    </div>
  );
}
