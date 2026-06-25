import Image from "next/image";
import { cn } from "@/lib/utils";

export type CtaPhoneProps = {
  className?: string;
};

export function CtaPhone({ className }: CtaPhoneProps) {
  return (
    <div
      className={cn(
        "relative flex h-[640px] w-[400px] shrink-0 flex-col items-center justify-center",
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
