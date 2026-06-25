import Image from "next/image";

const SPARKLES = [
  { left: 60, top: 80, size: 24, inner: 19 },
  { left: 700, top: 140, size: 16, inner: 13 },
  { left: 1340, top: 200, size: 20, inner: 16 },
  { left: 120, top: 560, size: 18, inner: 14 },
  { left: 680, top: 480, size: 14, inner: 11 },
] as const;

function DotGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[750px] top-[150px] flex flex-col gap-6 opacity-[0.08]"
    >
      {Array.from({ length: 8 }, (_, row) => (
        <div key={row} className="flex gap-6">
          {Array.from({ length: 8 }, (_, col) => (
            <div key={col} className="size-1 rounded-[2px] bg-white" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function CtaBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 720px 372px at 50% 50%, rgba(13,59,34,0) 0%, rgba(5,26,14,1) 100%)",
        }}
      />

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

      <div className="absolute left-[800px] top-[50px] size-[650px]">
        <div className="absolute inset-[-30.77%]">
          <div className="relative size-full">
            <Image
              src="/cta-section/glow-2.svg"
              alt=""
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <DotGrid />

      <Image
        src="/cta-section/orbit-1.svg"
        alt=""
        width={520}
        height={520}
        unoptimized
        className="absolute left-[860px] top-[72px]"
      />
      <Image
        src="/cta-section/orbit-2.svg"
        alt=""
        width={420}
        height={420}
        unoptimized
        className="absolute left-[910px] top-[122px]"
      />

      {SPARKLES.map((sparkle, index) => (
        <div
          key={index}
          className="absolute flex items-center justify-center"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
          }}
        >
          <Image
            src="/cta-section/sparkle.svg"
            alt=""
            width={sparkle.inner}
            height={sparkle.inner}
            aria-hidden
          />
        </div>
      ))}
    </div>
  );
}
