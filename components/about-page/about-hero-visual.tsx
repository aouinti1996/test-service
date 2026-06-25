import Image from "next/image";

/** Figma node 153:1059 — about hero visual */
const VISUAL_WIDTH = 614;
const VISUAL_HEIGHT = 460;
const VISUAL_TOP = 65;
const VISUAL_RIGHT = 55;

export function AboutHeroVisual() {
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
        src="/about-page/hero-visual.png"
        alt="Afghanistan connectivity map with telecom, mobile, wallet, and retail icons"
        width={VISUAL_WIDTH}
        height={VISUAL_HEIGHT}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
