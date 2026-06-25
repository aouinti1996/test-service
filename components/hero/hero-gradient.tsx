/**
 * Figma node 42:2285 — combined gradient SVG (base + both ellipses + blur).
 */
export function HeroGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-[-1px] overflow-hidden"
    >
      <img
        src="/hero-section/gradient-bg.svg"
        alt=""
        className="size-full object-cover object-center"
      />
    </div>
  );
}
