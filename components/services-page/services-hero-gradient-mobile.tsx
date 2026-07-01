/**
 * Figma 648:5015 — services mobile hero background (375×477).
 * Combined SVG: base + both ellipses + blur.
 */
export function ServicesHeroGradientMobile() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-20 z-0 h-[477px] overflow-hidden xl:hidden"
    >
      <img
        src="/service-mobile-bg.svg"
        alt=""
        className="size-full min-w-full object-cover object-top"
      />
    </div>
  );
}
