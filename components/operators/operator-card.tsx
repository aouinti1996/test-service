import Image from "next/image";
import { cn } from "@/lib/utils";
import type { OperatorItem } from "./operators-config";

export type OperatorCardProps = OperatorItem & {
  className?: string;
};

export function OperatorCard({
  name,
  logo,
  logoWidth = 80,
  logoHeight = 80,
  objectFit = "contain",
  className,
}: OperatorCardProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 items-center gap-6 rounded-2xl border border-border-subtle bg-bg-elevated p-4",
        className,
      )}
    >
      <div className="flex size-[120px] shrink-0 items-center justify-center rounded-full bg-bg-subtle p-5">
        <Image
          src={logo}
          alt={name}
          width={logoWidth}
          height={logoHeight}
          className={cn(
            "max-h-full max-w-full",
            objectFit === "contain" ? "object-contain" : "object-cover",
          )}
        />
      </div>
      <p className="whitespace-nowrap text-heading-h3-bold text-text-body">
        {name}
      </p>
    </article>
  );
}
