import { cn } from "@/lib/utils";

type CoverageDotGridProps = {
  className?: string;
};

export function CoverageDotGrid({ className }: CoverageDotGridProps) {
  return (
    <div
      aria-hidden
      className={cn("grid grid-cols-8 gap-6 opacity-10 xl:opacity-25", className)}
    >
      {Array.from({ length: 64 }).map((_, index) => (
        <span key={index} className="size-1 rounded-sm bg-primary-default" />
      ))}
    </div>
  );
}
