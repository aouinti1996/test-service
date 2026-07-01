"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";

/**
 * Figma node 639:2956 — mobile header at the top of the page.
 * Scrolls with content; ScrollNavbar takes over once the user scrolls down.
 */
export function MobileTopNavbar() {
  const pathname = usePathname();

  return (
    <div className="shrink-0 xl:hidden">
      <Navbar activeHref={pathname} variant="standalone" />
    </div>
  );
}
