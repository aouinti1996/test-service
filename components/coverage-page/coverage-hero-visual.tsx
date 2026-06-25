import Image from "next/image";

/** Figma node 182:914 — coverage hero visual */
const VISUAL_WIDTH = 726;
const VISUAL_HEIGHT = 544;
const VISUAL_TOP = 23;
const VISUAL_RIGHT = -1;

export function CoverageHeroVisual() {
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
        src="/coverage-page/hero-visual.png"
        alt="Nationwide coverage across Afghanistan with tower, cities, retail, and mobile wallet"
        width={VISUAL_WIDTH}
        height={VISUAL_HEIGHT}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
