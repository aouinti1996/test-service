"use client";

import type { InputHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type AuthInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  icon?: LucideIcon;
  className?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
};

export function AuthInput({
  icon,
  className,
  leading,
  trailing,
  ...props
}: AuthInputProps) {
  return (
    <div
      className={cn(
        "flex h-14 w-full items-center gap-3 overflow-hidden rounded-2xl bg-gray-50/80 px-4",
        className,
      )}
    >
      {icon ? (
        <Icon icon={icon} variant="default" size={20} strokeWidth={2} />
      ) : null}
      {leading}
      <input
        className="min-w-0 flex-1 cursor-text bg-transparent text-body-large-regular text-text-heading outline-none placeholder:text-text-secondary"
        {...props}
      />
      {trailing}
    </div>
  );
}

export function AuthPhonePrefix() {
  return (
    <span className="rounded-lg bg-bg-elevated px-2 py-1 text-body-small-bold text-text-body">
      +93
    </span>
  );
}
