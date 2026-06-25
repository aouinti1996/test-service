import Image from "next/image";

/** Figma node 308:2900 — integration hero visual */
const VISUAL_WIDTH = 577;
const VISUAL_HEIGHT = 433;

export function IntegrationHeroVisual() {
  return (
    <div
      className="pointer-events-none absolute bottom-[-2px] right-[-1px] z-[1]"
      style={{ width: VISUAL_WIDTH, height: VISUAL_HEIGHT }}
    >
      <Image
        src="/integration-page/hero-visual.png"
        alt="Code editor and mobile top-up interface integration preview"
        width={VISUAL_WIDTH}
        height={VISUAL_HEIGHT}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
