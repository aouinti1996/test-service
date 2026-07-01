/**
 * Figma 656:5706 — about mobile hero background (375×477).
 */
export function AboutHeroGradientMobile() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[477px] overflow-hidden xl:hidden"
    >
      <img
        src="/about-page/bg-mobile.svg"
        alt=""
        className="size-full min-w-full object-cover object-top"
      />
    </div>
  );
}
