import { StatLottie } from "./stat-lottie";

export type StatItemProps = {
  lottieSrc: string;
  value: string;
  label: string;
};

export function StatItem({ lottieSrc, value, label }: StatItemProps) {
  return (
    <div className="flex min-w-0 flex-1 items-center justify-center gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-subtle-bg">
        <StatLottie src={lottieSrc} />
      </div>
      <div className="flex flex-col items-start">
        <p className="w-full text-display-small-bold text-primary-subtle-text">
          {value}
        </p>
        <p className="w-full text-body-large-regular text-text-body">{label}</p>
      </div>
    </div>
  );
}
