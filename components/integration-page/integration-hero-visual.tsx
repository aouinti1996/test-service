import Image from "next/image";
import { cn } from "@/lib/utils";

/** Figma 308:2900 desktop / 661:9604 mobile */
export type IntegrationHeroVisualProps = {
  variant?: "desktop" | "mobile";
  className?: string;
};

const DESKTOP_WIDTH = 577;
const DESKTOP_HEIGHT = 433;

export function IntegrationHeroVisual({
  variant = "desktop",
  className,
}: IntegrationHeroVisualProps) {
  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "relative aspect-[1448/1086] w-full shrink-0 overflow-hidden xl:hidden",
          className,
        )}
      >
        <Image
          src="/integration-page/hero-visual-mobile.png"
          alt="Code editor and mobile top-up interface integration preview"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={cn("pointer-events-none absolute bottom-[-2px] right-[-1px] z-[1] hidden xl:block", className)}
      style={{ width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT }}
    >
      <Image
        src="/integration-page/hero-visual.png"
        alt="Code editor and mobile top-up interface integration preview"
        width={DESKTOP_WIDTH}
        height={DESKTOP_HEIGHT}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
