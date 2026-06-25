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
        "flex min-w-0 flex-1 flex-col gap-6 rounded-2xl bg-bg-elevated p-10 shadow-[0px_10px_15px_rgba(0,0,0,0.04)]",
        className,
      )}
    >
      <StarRating />

      <blockquote className="text-body-large-regular text-text-body">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <footer className="flex items-center gap-3">
        <div
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-disabled"
        >
          <span className="text-caption-large-bold text-text-heading">
            {initial}
          </span>
        </div>

        <div className="flex flex-col items-start">
          <cite className="not-italic text-caption-large-bold text-text-heading">
            {name}
          </cite>
          <p className="text-caption-small-regular text-text-secondary">
            {location}
          </p>
        </div>
      </footer>
    </article>
  );
}
