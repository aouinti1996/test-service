import Image from "next/image";

export function AtraCertifiedVisual() {
  return (
    <div className="relative z-10 aspect-[540/534] w-full max-w-full shrink-0 xl:h-[534px] xl:w-[540px]">
      <Image
        src="/atra-certified/atra-seal-mobile.png"
        alt="ATRA Certified — Licensed and Compliant"
        width={540}
        height={534}
        unoptimized
        className="pointer-events-none size-full object-cover xl:hidden"
      />
      <Image
        src="/atra-certified/atra-seal.png"
        alt="ATRA Certified — Licensed and Compliant"
        width={540}
        height={534}
        unoptimized
        className="pointer-events-none hidden size-full object-cover xl:block"
      />
    </div>
  );
}
