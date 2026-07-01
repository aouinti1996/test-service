/**
 * Figma 661:9225 — integration mobile hero background (375×443).
 */
export function IntegrationHeroGradientMobile() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-20 z-0 h-[443px] overflow-hidden xl:hidden"
    >
      <img
        src="/integration-page/bg-mobile.svg"
        alt=""
        className="size-full min-w-full object-cover object-top"
      />
    </div>
  );
}
