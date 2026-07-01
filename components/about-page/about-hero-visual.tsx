import Image from "next/image";
import { cn } from "@/lib/utils";

/** Figma 153:1059 desktop / 656:6253 mobile */
export type AboutHeroVisualProps = {
  variant?: "desktop" | "mobile";
  className?: string;
};

const DESKTOP_WIDTH = 614;
const DESKTOP_HEIGHT = 460;
const DESKTOP_TOP = 65;
const DESKTOP_RIGHT = 55;

export function AboutHeroVisual({
  variant = "desktop",
  className,
}: AboutHeroVisualProps) {
  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "relative aspect-[1448/1086] w-full shrink-0 overflow-hidden xl:hidden",
          className,
        )}
      >
        <Image
          src="/about-page/hero-visual-mobile.png"
          alt="Afghanistan connectivity map with telecom, mobile, wallet, and retail icons"
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
        src="/about-page/hero-visual.png"
        alt="Afghanistan connectivity map with telecom, mobile, wallet, and retail icons"
        width={DESKTOP_WIDTH}
        height={DESKTOP_HEIGHT}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
