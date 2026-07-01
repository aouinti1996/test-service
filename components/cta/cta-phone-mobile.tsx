import Image from "next/image";

/**
 * Figma 647:4299 — 108×212, vertically centered on trust row.
 * ≤375px: left 189px (375 artboard). Wider mobile: anchored right so gap doesn't grow.
 */
export function CtaPhoneMobile() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[189px] right-auto top-1/2 z-0 h-[212px] w-[108px] -translate-y-1/2 min-[376px]:left-auto min-[376px]:right-0 xl:hidden"
    >
      <Image
        src="/cta-section/phone-mobile-crop.png"
        alt=""
        width={216}
        height={424}
        unoptimized
        className="size-full object-contain object-center"
      />
    </div>
  );
}
