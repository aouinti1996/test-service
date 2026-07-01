import { StarRating } from "./star-rating";
import type { TestimonialItem } from "./testimonials-config";
import { cn } from "@/lib/utils";

export type TestimonialCardProps = TestimonialItem & {
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  location,
  initial,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex w-[300px] shrink-0 flex-col gap-4 rounded-2xl bg-white p-4 shadow-[0px_10px_30px_rgba(0,0,0,0.04)]",
        "xl:w-auto xl:min-w-0 xl:flex-1 xl:gap-6 xl:bg-bg-elevated xl:p-10",
        className,
      )}
    >
      <StarRating />

      <blockquote className="text-sm leading-5 text-text-body xl:text-body-large-regular">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <footer className="flex items-center gap-3">
        <div
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-[#f3f4f6] xl:rounded-full xl:bg-bg-disabled"
        >
          <span className="text-xs font-bold leading-none text-[#0b1f4a] xl:text-caption-large-bold xl:text-text-heading">
            {initial}
          </span>
        </div>

        <div className="flex flex-col items-start">
          <cite className="not-italic text-xs font-bold leading-4 text-text-heading xl:text-caption-large-bold">
            {name}
          </cite>
          <p className="text-[11px] leading-[14px] text-text-secondary xl:text-caption-small-regular">
            {location}
          </p>
        </div>
      </footer>
    </article>
  );
}
