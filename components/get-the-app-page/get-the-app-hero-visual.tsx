import { cn } from "@/lib/utils";

/** Figma 661:8171 — mobile hero visual crop */
export type GetTheAppHeroVisualProps = {
  variant?: "desktop" | "mobile";
  className?: string;
};

const DESKTOP_WIDTH = 769;
const DESKTOP_HEIGHT = 433;
const DESKTOP_TOP = 59;
const DESKTOP_RIGHT = 95;

export function GetTheAppHeroVisual({
  variant = "desktop",
  className,
}: GetTheAppHeroVisualProps) {
  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "relative aspect-[196/141] w-full shrink-0 overflow-hidden xl:hidden",
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/get-the-app-page/hero-visual-mobile.png"
          alt="Active Services mobile app"
          className="absolute left-[-27.69%] top-0 h-full w-[127.82%] max-w-none object-cover"
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/services-page/hero-visual.png"
        alt="Active Services mobile app"
        width={DESKTOP_WIDTH}
        height={DESKTOP_HEIGHT}
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
