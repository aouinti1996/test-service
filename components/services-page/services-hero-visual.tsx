import Image from "next/image";

/** Figma node 166:2675 — services hero visual */
const VISUAL_WIDTH = 769;
const VISUAL_HEIGHT = 433;
const VISUAL_TOP = 59;
const VISUAL_RIGHT = 95;

export function ServicesHeroVisual() {
  return (
    <div
      className="pointer-events-none absolute z-[1]"
      style={{
        top: VISUAL_TOP,
        right: VISUAL_RIGHT,
        width: VISUAL_WIDTH,
        height: VISUAL_HEIGHT,
      }}
    >
      <Image
        src="/services-page/hero-visual.png"
        alt="Active Services app with mobile recharge, wallet, bundles, and retailer stock"
        width={VISUAL_WIDTH}
        height={VISUAL_HEIGHT}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
