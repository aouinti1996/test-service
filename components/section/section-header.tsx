import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  title: ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-4 text-center",
        className,
      )}
    >
      <h2 className="w-full text-heading-h1-bold text-text-heading">{title}</h2>
      {description ? (
        <p className="max-w-[720px] text-body-large-regular text-text-body-small">
          {description}
        </p>
      ) : null}
    </div>
  );
}
