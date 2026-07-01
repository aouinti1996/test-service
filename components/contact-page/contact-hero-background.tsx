import Image from "next/image";

export function ContactHeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[260px] w-full -translate-x-1/2 -translate-y-1/2 xl:top-[calc(50%-20px)] xl:h-[430px]">
        <div className="relative size-full overflow-hidden">
          <Image
            src="/contact-page/hero-background-mobile.png"
            alt=""
            fill
            unoptimized
            className="object-cover object-center xl:hidden"
          />
          <Image
            src="/contact-page/hero-background.png"
            alt=""
            fill
            unoptimized
            className="hidden object-cover object-left xl:block"
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

      <div className="absolute left-[900px] top-0 hidden size-[500px] xl:block">
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
