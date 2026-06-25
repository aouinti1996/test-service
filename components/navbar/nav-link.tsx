import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
};

export function NavLink({
  href,
  children,
  className,
  isActive = false,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "shrink-0 whitespace-nowrap text-body-small-medium text-text-heading transition-[color,opacity,transform] duration-300 hover:text-primary-default",
        isActive && "text-primary-default",
        className,
      )}
    >
      {children}
    </Link>
  );
}
