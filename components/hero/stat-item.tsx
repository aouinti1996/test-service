import { cn } from "@/lib/utils";
import { StatLottie } from "./stat-lottie";

export type StatItemProps = {
  lottieSrc: string;
  value: string;
  label: string;
  layout?: "horizontal" | "compact";
};

export function StatItem({
  lottieSrc,
  value,
  label,
  layout = "horizontal",
}: StatItemProps) {
  const isCompact = layout === "compact";

  return (
    <div
      className={cn(
        "flex min-w-0 flex-1",
        isCompact
          ? "flex-col items-center gap-1 text-center"
          : "items-center justify-center gap-4",
      )}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-subtle-bg">
        <StatLottie src={lottieSrc} />
      </div>
      <div
        className={cn(
          "flex flex-col",
          isCompact ? "items-center" : "items-start",
        )}
      >
        <p
          className={cn(
            "w-full text-primary-subtle-text",
            isCompact
              ? "text-[20px] font-bold leading-7"
              : "text-display-small-bold",
          )}
        >
          {value}
        </p>
        <p
          className={cn(
            "w-full text-text-body",
            isCompact
              ? "text-xs leading-4"
              : "text-body-large-regular",
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
