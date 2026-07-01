import Image from "next/image";
import { cn } from "@/lib/utils";

/** Figma 308:2785 desktop / 658:7011 mobile */
export type DistributorHeroVisualProps = {
  variant?: "desktop" | "mobile";
  className?: string;
};

const DESKTOP_WIDTH = 483;
const DESKTOP_HEIGHT = 362;
const DESKTOP_TOP = 100;
const DESKTOP_RIGHT = 68;

export function DistributorHeroVisual({
  variant = "desktop",
  className,
}: DistributorHeroVisualProps) {
  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "relative aspect-[1448/1086] w-full shrink-0 overflow-hidden xl:hidden",
          className,
        )}
      >
        <Image
          src="/distributor-page/hero-visual-mobile.png"
          alt="Distributor network with central hub connected to retail shops"
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
        src="/distributor-page/hero-visual.png"
        alt="Distributor network with central hub connected to retail shops"
        width={DESKTOP_WIDTH}
        height={DESKTOP_HEIGHT}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
