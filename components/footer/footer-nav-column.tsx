import Link from "next/link";
import type { FooterNavGroup } from "./footer-config";
import { cn } from "@/lib/utils";

export type FooterNavColumnProps = FooterNavGroup & {
  className?: string;
};

export function FooterNavColumn({ title, links, className }: FooterNavColumnProps) {
  return (
    <nav aria-label={title} className={cn("flex w-40 flex-col gap-4", className)}>
      <p className="text-body-small-medium text-text-heading">{title}</p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-body-small-medium text-text-secondary transition-colors hover:text-text-heading"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
