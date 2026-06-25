import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "subtle" | "outline";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-default text-text-inverse hover:bg-primary-hover active:bg-primary-active",
  subtle:
    "bg-primary-subtle-bg text-primary-subtle-text hover:bg-primary-50 active:bg-primary-100",
  outline:
    "border border-border-default bg-bg-elevated text-text-heading hover:bg-bg-subtle active:bg-bg-disabled",
};

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 text-body-large-medium shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)] transition-colors disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "text-body-large-bold font-bold",
        variantClassName[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
