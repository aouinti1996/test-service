import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  title: ReactNode;
  description?: string;
  descriptionClassName?: string;
  className?: string;
  size?: "default" | "compact";
};

export function SectionHeader({
  title,
  description,
  descriptionClassName,
  className,
  size = "default",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-4 text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "w-full text-text-heading",
          size === "compact"
            ? "text-xl font-bold leading-7 xl:text-heading-h1-bold"
            : "text-[24px] font-bold leading-8 xl:text-heading-h1-bold",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-[720px] text-sm leading-5 text-text-body-small xl:text-body-large-regular",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
