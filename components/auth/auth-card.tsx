import type { HTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type AuthCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

/** Figma 325:1963 / 325:2017 — frosted auth card */
export function AuthCard({ children, className, ...props }: AuthCardProps) {
  return (
    <div
      className={cn(
        "flex max-h-[calc(100dvh-1.5rem)] w-full flex-col items-center gap-4 overflow-y-auto rounded-3xl border border-white/25 bg-white/80 p-4 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.13)] backdrop-blur-[16px] xl:max-h-none xl:gap-8 xl:overflow-visible xl:rounded-[40px] xl:p-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type AuthCardIconBadgeProps = {
  icon: LucideIcon;
};

export function AuthCardIconBadge({ icon }: AuthCardIconBadgeProps) {
  return (
    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-bg-elevated shadow-[0px_4px_4px_rgba(0,0,0,0.06)] xl:size-16 xl:rounded-[20px]">
      <Icon
        icon={icon}
        variant="primary"
        size={24}
        strokeWidth={2}
        className="xl:hidden"
      />
      <Icon
        icon={icon}
        variant="primary"
        size={28}
        strokeWidth={2}
        className="hidden xl:block"
      />
    </div>
  );
}

export type AuthCardHeaderProps = {
  title: string;
  description: string;
  titleId?: string;
};

export function AuthCardHeader({
  title,
  description,
  titleId,
}: AuthCardHeaderProps) {
  return (
    <div className="flex w-full flex-col items-center gap-1 text-center xl:gap-2">
      <h2
        id={titleId}
        className="w-full text-xl font-bold leading-7 text-text-heading xl:text-heading-h2-bold"
      >
        {title}
      </h2>
      <p className="w-full text-xs leading-4 text-text-secondary xl:text-body-small-regular">
        {description}
      </p>
    </div>
  );
}

export const authPrimaryButtonClassName =
  "flex h-12 w-full cursor-pointer items-center justify-center rounded-2xl bg-primary-default text-sm font-bold leading-5 text-text-inverse shadow-[0px_8px_8px_rgba(0,191,166,0.25)] transition-colors hover:bg-primary-hover xl:h-14 xl:text-body-large-bold xl:leading-6";

export const authFooterTextClassName =
  "text-center text-xs leading-4 text-text-secondary xl:text-body-small-regular xl:leading-5";

export const authFooterLinkClassName =
  "cursor-pointer font-bold text-primary-600 xl:text-primary-subtle-text";
