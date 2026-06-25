import Image from "next/image";

/** Figma node 308:2785 — distributor hero visual */
const VISUAL_WIDTH = 483;
const VISUAL_HEIGHT = 362;
const VISUAL_TOP = 100;
const VISUAL_RIGHT = 68;

export function DistributorHeroVisual() {
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
        src="/distributor-page/hero-visual.png"
        alt="Distributor network with central hub connected to retail shops"
        width={VISUAL_WIDTH}
        height={VISUAL_HEIGHT}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
