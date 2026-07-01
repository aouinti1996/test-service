import Image from "next/image";

/**
 * Figma node 643:4146 — mobile CTA card background layers.
 * glow-1 + bg-overlay (680×612) + spark-1; desktop orbits/grid stay on xl.
 */
export function CtaBackgroundMobile() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden xl:hidden"
    >
      <div className="absolute -left-[150px] -top-[150px] size-[700px]">
        <div className="absolute inset-[-25.71%]">
          <div className="relative size-full">
            <Image
              src="/cta-section/glow-1.svg"
              alt=""
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <img
        src="/cta-section/mobile-bg-overlay.svg"
        alt=""
        className="absolute left-0 top-0 h-full min-h-[612px] w-[680px] max-w-none"
      />

      <div className="absolute left-[171px] top-[200px] flex size-6 items-center justify-center">
        <Image
          src="/cta-section/sparkle.svg"
          alt=""
          width={19}
          height={19}
          aria-hidden
        />
      </div>
    </div>
  );
}
