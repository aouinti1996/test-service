import { cn } from "@/lib/utils";
import { HERO_STATS } from "./stat-config";
import { StatItem } from "./stat-item";

function StatDivider() {
  return <div className="w-px shrink-0 self-stretch bg-border-default" />;
}

export type HeroStatsBarProps = {
  className?: string;
};

export function HeroStatsBar({ className }: HeroStatsBarProps) {
  return (
    <div
      className={cn(
        "flex w-full items-stretch rounded-[24px] border border-border-subtle bg-bg-elevated py-4",
        className,
      )}
    >
      {HERO_STATS.map((stat, index) => (
        <div key={stat.label} className="flex min-w-0 flex-1 items-stretch">
          {index > 0 && <StatDivider />}
          <StatItem
            lottieSrc={stat.lottieSrc}
            value={stat.value}
            label={stat.label}
          />
        </div>
      ))}
    </div>
  );
}
