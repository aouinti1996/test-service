import Image from "next/image";

export function ContactHeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[calc(50%-20px)] h-[430px] w-full -translate-x-1/2 -translate-y-1/2">
        <div className="relative size-full overflow-hidden">
          <Image
            src="/contact-page/hero-background.png"
            alt=""
            fill
            unoptimized
            className="object-cover object-left"
          />
        </div>
      </div>

      <div className="absolute -left-[150px] -top-[150px] size-[600px]">
        <div className="absolute inset-[-25%]">
          <div className="relative size-full">
            <Image
              src="/cta-section/glow-1.svg"
              alt=""
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-[900px] top-0 size-[500px]">
        <div className="absolute inset-[-30%]">
          <div className="relative size-full">
            <Image
              src="/cta-section/glow-2.svg"
              alt=""
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
