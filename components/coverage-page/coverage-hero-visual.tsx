import Image from "next/image";
import { cn } from "@/lib/utils";

/** Figma 182:914 desktop / 655:4883 mobile */
export type CoverageHeroVisualProps = {
  variant?: "desktop" | "mobile";
  className?: string;
};

const DESKTOP_WIDTH = 726;
const DESKTOP_HEIGHT = 544;
const DESKTOP_TOP = 23;
const DESKTOP_RIGHT = -1;

export function CoverageHeroVisual({
  variant = "desktop",
  className,
}: CoverageHeroVisualProps) {
  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "relative aspect-[1448/1086] w-full shrink-0 overflow-hidden xl:hidden",
          className,
        )}
      >
        <Image
          src="/coverage-page/hero-visual-mobile.png"
          alt="Nationwide coverage across Afghanistan with tower, cities, retail, and mobile wallet"
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
      className={cn("pointer-events-none absolute z-[1] hidden xl:block", className)}
      style={{
        top: DESKTOP_TOP,
        right: DESKTOP_RIGHT,
        width: DESKTOP_WIDTH,
        height: DESKTOP_HEIGHT,
      }}
    >
      <Image
        src="/coverage-page/hero-visual.png"
        alt="Nationwide coverage across Afghanistan with tower, cities, retail, and mobile wallet"
        width={DESKTOP_WIDTH}
        height={DESKTOP_HEIGHT}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
