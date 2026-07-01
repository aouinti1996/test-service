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
        "flex h-12 w-full items-center gap-2.5 overflow-hidden rounded-xl bg-gray-100/80 px-3 xl:h-14 xl:gap-3 xl:rounded-2xl xl:px-4",
        className,
      )}
    >
      {icon ? (
        <Icon
          icon={icon}
          variant="default"
          size={18}
          strokeWidth={2}
          className="xl:hidden"
        />
      ) : null}
      {icon ? (
        <Icon
          icon={icon}
          variant="default"
          size={20}
          strokeWidth={2}
          className="hidden xl:block"
        />
      ) : null}
      {leading}
      <input
        className="min-w-0 flex-1 cursor-text bg-transparent text-sm text-text-heading outline-none placeholder:text-text-secondary xl:text-body-large-regular"
        {...props}
      />
      {trailing}
    </div>
  );
}

export function AuthPhonePrefix() {
  return (
    <span className="rounded-md bg-bg-elevated px-1.5 py-0.5 text-xs font-bold leading-4 text-text-body xl:rounded-lg xl:px-2 xl:py-1 xl:text-body-small-bold xl:leading-5">
      +93
    </span>
  );
}
