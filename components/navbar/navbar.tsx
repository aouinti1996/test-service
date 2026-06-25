import { Logo } from "@/components/logo";
import { RegisterButton } from "@/components/auth/register-button";
import { LoginButton } from "@/components/auth/login-button";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";
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
  const isEmbedded = variant === "embedded";

  return (
    <header
      className={cn(
        "relative z-10 w-full",
        !isEmbedded && "border-b border-border-subtle bg-bg-elevated",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-20 w-full items-center justify-between",
          isEmbedded ? "px-20 py-4" : "mx-auto max-w-[1440px] gap-6 px-5 py-4 lg:px-20",
        )}
      >
        <Logo />

        <nav
          aria-label="Main navigation"
          className={cn(
            "flex min-w-0 flex-1 items-center justify-center gap-6",
            !isEmbedded && "hidden xl:flex",
          )}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              isActive={activeHref === item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher />
          <RegisterButton
            className={cn(!isEmbedded && "hidden sm:inline-flex")}
          />
          <LoginButton />
        </div>
      </div>
    </header>
  );
}
