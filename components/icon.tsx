import type { LucideIcon, LucideProps } from "lucide-react";

export type IconVariant =
  | "default"
  | "dark"
  | "inverse"
  | "disabled"
  | "primary"
  | "success"
  | "warning"
  | "error";

const variantClassName: Record<IconVariant, string> = {
  default: "text-icon-default",
  dark: "text-icon-dark",
  inverse: "text-icon-inverse",
  disabled: "text-icon-disabled",
  primary: "text-icon-primary",
  success: "text-icon-success",
  warning: "text-icon-warning",
  error: "text-icon-error",
};

export type IconProps = LucideProps & {
  icon: LucideIcon;
  variant?: IconVariant;
};

export function Icon({
  icon: IconComponent,
  variant = "default",
  className,
  size = 20,
  strokeWidth = 2,
  ...props
}: IconProps) {
  const classes = [variantClassName[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <IconComponent
      className={classes}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={props["aria-label"] ? undefined : true}
      {...props}
    />
  );
}
