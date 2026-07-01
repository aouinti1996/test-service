import Image from "next/image";
import { cn } from "@/lib/utils";

export type CtaPhoneProps = {
  className?: string;
};

export function CtaPhone({ className }: CtaPhoneProps) {
  return (
    <div
      className={cn(
        "relative flex h-auto w-full shrink-0 flex-col items-center justify-center xl:h-[640px] xl:w-[400px]",
        className,
      )}
    >
      <div className="relative aspect-[1086/1448] w-full">
        <Image
          src="/cta-section/phone.png"
          alt="Active Services mobile app dashboard"
          fill
          unoptimized
          className="object-cover"
          sizes="400px"
        />
      </div>
    </div>
  );
}
