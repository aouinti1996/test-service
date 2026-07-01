import Image from "next/image";
import { cn } from "@/lib/utils";
import type { OperatorItem } from "./operators-config";

export type OperatorCardProps = OperatorItem & {
  className?: string;
};

export function OperatorCard({
  name,
  logo,
  mobileLogo,
  logoWidth = 80,
  logoHeight = 80,
  mobileLogoWidth,
  mobileLogoHeight,
  mobileObjectFit = "cover",
  objectFit = "contain",
  className,
}: OperatorCardProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 items-center gap-2 rounded-2xl border border-border-subtle bg-bg-elevated p-2 xl:gap-6 xl:p-4",
        className,
      )}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-subtle p-2 xl:size-[120px] xl:p-5">
        <div
          className="relative shrink-0 xl:hidden"
          style={{
            width: mobileLogoWidth,
            height: mobileLogoHeight,
          }}
        >
          <Image
            src={mobileLogo}
            alt=""
            fill
            unoptimized
            sizes={`${mobileLogoWidth}px`}
            className={cn(
              mobileObjectFit === "contain" ? "object-contain" : "object-cover",
              "object-center",
            )}
          />
        </div>
        <Image
          src={logo}
          alt={name}
          width={logoWidth}
          height={logoHeight}
          className={cn(
            "hidden max-h-full max-w-full xl:block",
            objectFit === "contain" ? "object-contain" : "object-cover",
          )}
        />
      </div>
      <p className="min-w-0 text-sm font-bold leading-5 text-text-body xl:text-heading-h3-bold whitespace-nowrap">
        {name}
      </p>
    </article>
  );
}
