import Image from "next/image";

const NETWORKS = [
  { name: "Roshan", src: "/sponsors/roshan.svg", width: 52, height: 32 },
  { name: "Etisalat", src: "/sponsors/etisalat.svg", width: 32, height: 32 },
  { name: "AWCC", src: "/sponsors/afghan.svg", width: 32, height: 32 },
  {
    name: "Afghan Telecom",
    src: "/sponsors/afghan-telecom.svg",
    width: 53,
    height: 32,
  },
  { name: "Atoma", src: "/sponsors/atoma.svg", width: 80, height: 32 },
  { name: "Salaam", src: "/sponsors/salaam.svg", width: 45, height: 32 },
] as const;

export function SupportedNetworks() {
  return (
    <div className="flex w-full flex-col gap-5">
      <p className="whitespace-nowrap text-body-small-bold text-text-body">
        Supported Networks
      </p>
      <div className="flex items-center gap-4">
        {NETWORKS.map((network) => (
          <Image
            key={network.name}
            src={network.src}
            alt={network.name}
            width={network.width}
            height={network.height}
            className="h-8 w-auto max-w-none object-contain"
          />
        ))}
      </div>
    </div>
  );
}
