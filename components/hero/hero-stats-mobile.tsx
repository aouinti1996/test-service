import Image from "next/image";
import { cn } from "@/lib/utils";
import { HERO_STATS } from "./stat-config";

function MobileStatItem({
  iconSrc,
  value,
  label,
}: {
  iconSrc: string;
  value: string;
  label: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center gap-1">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-subtle-bg">
        <Image
          src={iconSrc}
          alt=""
          width={24}
          height={24}
          unoptimized
          className="size-6 object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-center text-center">
        <p className="w-full text-[20px] font-bold leading-7 text-primary-subtle-text">
          {value}
        </p>
        <p className="w-full text-xs leading-4 text-text-body">{label}</p>
      </div>
    </div>
  );
}

export function HeroStatsMobile({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4 rounded-[24px] border border-border-subtle bg-bg-elevated py-4",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between px-4">
        <MobileStatItem
          iconSrc={HERO_STATS[0].mobileIconSrc}
          value={HERO_STATS[0].value}
          label={HERO_STATS[0].label}
        />
        <MobileStatItem
          iconSrc={HERO_STATS[1].mobileIconSrc}
          value={HERO_STATS[1].value}
          label={HERO_STATS[1].label}
        />
      </div>
      <div className="flex w-full items-center justify-between px-4">
        <MobileStatItem
          iconSrc={HERO_STATS[2].mobileIconSrc}
          value={HERO_STATS[2].value}
          label={HERO_STATS[2].label}
        />
        <MobileStatItem
          iconSrc={HERO_STATS[3].mobileIconSrc}
          value={HERO_STATS[3].value}
          label={HERO_STATS[3].label}
        />
      </div>
    </div>
  );
}
