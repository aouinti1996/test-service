import Image from "next/image";

/** Figma 639:3036 — mobile hero sponsor row (fixed 28px-tall boxes). */
const MOBILE_NETWORKS = [
  {
    name: "Etisalat",
    src: "/hero-section/sponsors/etisalat.png",
    boxClassName: "h-7 w-[45px]",
  },
  {
    name: "Roshan",
    src: "/hero-section/sponsors/roshan.png",
    boxClassName: "size-7",
  },
  {
    name: "AWCC",
    src: "/hero-section/sponsors/awcc.png",
    boxClassName: "size-7",
  },
  {
    name: "Afghan Telecom",
    src: "/hero-section/sponsors/afghan-telecom.png",
    boxClassName: "h-7 w-[46px]",
  },
  {
    name: "Atoma",
    src: "/hero-section/sponsors/atoma.png",
    boxClassName: "h-7 w-[70px]",
  },
  {
    name: "Salaam",
    src: "/hero-section/sponsors/salaam.png",
    boxClassName: "h-7 w-10",
  },
] as const;

const DESKTOP_NETWORKS = [
  {
    name: "Etisalat",
    src: "/sponsors/etisalat.svg",
    width: 45,
    height: 32,
    className: "h-8 w-8 object-contain",
  },
  {
    name: "Roshan",
    src: "/sponsors/roshan.svg",
    width: 52,
    height: 32,
    className: "h-8 w-[52px] object-contain",
  },
  {
    name: "AWCC",
    src: "/sponsors/afghan.svg",
    width: 32,
    height: 32,
    className: "h-8 w-8 object-contain",
  },
  {
    name: "Afghan Telecom",
    src: "/sponsors/afghan-telecom.svg",
    width: 53,
    height: 32,
    className: "h-8 w-[53px] object-contain",
  },
  {
    name: "Atoma",
    src: "/sponsors/atoma.svg",
    width: 80,
    height: 32,
    className: "h-8 w-20 object-contain",
  },
  {
    name: "Salaam",
    src: "/sponsors/salaam.svg",
    width: 45,
    height: 32,
    className: "h-8 w-[45px] object-contain",
  },
] as const;

export function SupportedNetworks() {
  return (
    <div className="flex w-full flex-col gap-5">
      <p className="text-xs font-bold leading-4 text-text-body xl:text-body-small-bold">
        Supported Networks
      </p>

      <div className="flex items-center gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] xl:overflow-visible [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-4 xl:hidden">
          {MOBILE_NETWORKS.map((network) => (
            <div
              key={network.name}
              className={`relative shrink-0 ${network.boxClassName}`}
            >
              <Image
                src={network.src}
                alt={network.name}
                fill
                unoptimized
                sizes="70px"
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          {DESKTOP_NETWORKS.map((network) => (
            <Image
              key={network.name}
              src={network.src}
              alt={network.name}
              width={network.width}
              height={network.height}
              className={`max-w-none shrink-0 ${network.className}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
