import Image from "next/image";

export function AtraCertifiedVisual() {
  return (
    <div className="relative z-10 h-[534px] w-[540px] max-w-full shrink-0">
      <Image
        src="/atra-certified/atra-seal.png"
        alt="ATRA Certified — Licensed and Compliant"
        width={540}
        height={534}
        unoptimized
        className="pointer-events-none size-full object-cover"
      />
    </div>
  );
}
