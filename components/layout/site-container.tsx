import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Figma artboard width */
export const SITE_MAX_WIDTH = 1440;

export type SiteContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SiteContainer({ children, className }: SiteContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px]", className)}>
      {children}
    </div>
  );
}
