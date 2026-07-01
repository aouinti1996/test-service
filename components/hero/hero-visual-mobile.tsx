import Image from "next/image";
import { HeroStatsMobile } from "./hero-stats-mobile";

export function HeroVisualMobile() {
  return (
    <div className="flex w-full max-w-[335px] flex-col gap-0 self-center xl:hidden">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden">
        <Image
          src="/hero-section/hero-phone-mobile.png"
          alt="Active Services mobile app"
          width={335}
          height={447}
          priority
          unoptimized
          className="pointer-events-none absolute left-0 top-0 h-[133.33%] w-full max-w-none object-cover object-top"
        />
      </div>
      <HeroStatsMobile className="w-full" />
    </div>
  );
}
