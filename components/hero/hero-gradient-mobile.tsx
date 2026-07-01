/**
 * Figma node 642:3390 — mobile hero background (375×1080 artboard).
 * Fills the hero section only (clipped by parent overflow-hidden) and scales
 * with width via object-cover so it stays correct on every mobile size.
 */
export function HeroGradientMobile() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden xl:hidden"
    >
      <img
        src="/hero-section/mobile-graient.svg"
        alt=""
        className="size-full min-w-full object-cover object-top"
      />
    </div>
  );
}
