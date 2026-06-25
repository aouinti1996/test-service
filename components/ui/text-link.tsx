import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full text-body-large-medium text-primary-subtle-text transition-colors hover:text-primary-default",
        className,
      )}
    >
      {children}
      <Icon icon={ChevronRight} variant="primary" size={20} strokeWidth={2} />
    </Link>
  );
}
