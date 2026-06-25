import Image from "next/image";

/** Figma node 114:488 — exact px placement */
const PHONE_WIDTH = 725.25;
const PHONE_HEIGHT = 967;
const PHONE_TOP = 79;
const PHONE_RIGHT = -1.25;

export function HeroPhone() {
  return (
    <div
      className="pointer-events-none absolute z-[1]"
      style={{
        top: PHONE_TOP,
        right: PHONE_RIGHT,
        width: PHONE_WIDTH,
        height: PHONE_HEIGHT,
      }}
    >
      <Image
        src="/hero-section/hero-phone.png"
        alt="Active Services mobile app"
        width={725}
        height={967}
        priority
        unoptimized
        className="pointer-events-none size-full max-w-none object-cover"
      />
    </div>
  );
}
