/**
 * Figma 655:4540 — coverage mobile hero background (375×477).
 */
export function CoverageHeroGradientMobile() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[477px] overflow-hidden xl:hidden"
    >
      <img
        src="/coverage-page/bg-mobile.svg"
        alt=""
        className="size-full min-w-full object-cover object-top"
      />
    </div>
  );
}
