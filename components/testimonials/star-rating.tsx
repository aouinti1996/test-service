import Image from "next/image";
import { cn } from "@/lib/utils";

export type StarRatingProps = {
  count?: number;
  className?: string;
};

export function StarRating({ count = 5, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-start gap-1", className)}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }, (_, index) => (
        <Image
          key={index}
          src="/testimonials-section/star.svg"
          alt=""
          width={16}
          height={16}
          unoptimized
          className="size-4 shrink-0"
          aria-hidden
        />
      ))}
    </div>
  );
}
