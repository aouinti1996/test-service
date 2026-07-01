"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { RegisterButton } from "@/components/auth/register-button";
import { LoginButton } from "@/components/auth/login-button";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNavMenu } from "./mobile-nav-menu";
import { NavLink } from "./nav-link";
import { NAV_ITEMS } from "./nav-items";

export type NavbarVariant = "standalone" | "embedded";

export type NavbarProps = {
  className?: string;
  activeHref?: string;
  variant?: NavbarVariant;
};

export function Navbar({
  className,
  activeHref = "/",
  variant = "standalone",
}: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isEmbedded = variant === "embedded";
  const resolvedActiveHref = activeHref || pathname;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "relative z-10 w-full",
          !isEmbedded && "bg-bg-elevated",
          !isEmbedded &&
            "shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)] xl:border-b xl:border-border-subtle xl:shadow-none",
          className,
        )}
      >
        <div
          className={cn(
            "flex h-20 w-full items-center justify-between",
            isEmbedded
              ? "px-4 py-3 xl:px-20 xl:py-4"
              : "px-4 py-3 xl:mx-auto xl:max-w-[1440px] xl:gap-6 xl:py-4 lg:px-20",
          )}
        >
          <Logo variant="responsive" />

          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-6 xl:flex"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={resolvedActiveHref === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <LanguageSwitcher />
            <RegisterButton
              className={cn(!isEmbedded && "hidden sm:inline-flex")}
            />
            <LoginButton />
          </div>

          <button
            type="button"
            className="flex size-6 shrink-0 cursor-pointer items-center justify-center text-text-heading xl:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={2} aria-hidden />
          </button>
        </div>
      </header>

      <MobileNavMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeHref={resolvedActiveHref}
      />
    </>
  );
}
