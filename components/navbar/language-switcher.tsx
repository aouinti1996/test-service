import { Button } from "@/components/ui/button";

function FlagGb({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="10" cy="10" r="10" fill="#012169" />
      <path d="M0 0L20 20M20 0L0 20" stroke="white" strokeWidth="3.5" />
      <path d="M0 0L20 20M20 0L0 20" stroke="#C8102E" strokeWidth="2" />
      <path d="M10 0V20M0 10H20" stroke="white" strokeWidth="5.5" />
      <path d="M10 0V20M0 10H20" stroke="#C8102E" strokeWidth="3.5" />
    </svg>
  );
}

export type LanguageSwitcherProps = {
  locale?: string;
  onClick?: () => void;
  className?: string;
};

export function LanguageSwitcher({
  locale = "EN",
  onClick,
  className,
}: LanguageSwitcherProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      aria-label={`Language: ${locale}`}
      className={className}
    >
      <FlagGb className="size-5 shrink-0 rounded-full" />
      <span>{locale}</span>
    </Button>
  );
}
