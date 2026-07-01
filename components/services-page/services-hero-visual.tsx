import { cn } from "@/lib/utils";

/** Figma 648:5586 — mobile hero visual crop */
export type ServicesHeroVisualProps = {
  variant?: "desktop" | "mobile";
  className?: string;
};

const DESKTOP_WIDTH = 769;
const DESKTOP_HEIGHT = 433;
const DESKTOP_TOP = 59;
const DESKTOP_RIGHT = 95;

export function ServicesHeroVisual({
  variant = "desktop",
  className,
}: ServicesHeroVisualProps) {
  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "relative aspect-[250/193] w-full shrink-0 overflow-hidden xl:hidden",
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/services-page/hero-visual-mobile.png"
          alt="Active Services app with mobile recharge, wallet, bundles, and retailer stock"
          className="absolute left-[-37.2%] top-0 h-[100.07%] w-[137.2%] max-w-none object-cover"
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
        alt="Active Services app with mobile recharge, wallet, bundles, and retailer stock"
        width={DESKTOP_WIDTH}
        height={DESKTOP_HEIGHT}
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
