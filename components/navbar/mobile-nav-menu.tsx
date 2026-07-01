"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { RegisterButton } from "@/components/auth/register-button";
import { LoginButton } from "@/components/auth/login-button";
import { Logo } from "@/components/logo";
import { MOTION_EASE } from "@/components/motion/motion-config";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";
import { NAV_ITEMS } from "./nav-items";

export type MobileNavMenuProps = {
  open: boolean;
  onClose: () => void;
  activeHref?: string;
};

export function MobileNavMenu({
  open,
  onClose,
  activeHref = "/",
}: MobileNavMenuProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.nav
          initial={reduceMotion ? false : { x: "100%" }}
          animate={{ x: 0 }}
          exit={reduceMotion ? undefined : { x: "100%" }}
          transition={{
            duration: reduceMotion ? 0 : 0.32,
            ease: MOTION_EASE,
          }}
          className="fixed inset-0 z-50 flex h-dvh max-h-dvh flex-col bg-bg-elevated xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-border-subtle px-4 py-3">
            <Logo variant="responsive" onClick={onClose} />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex size-9 cursor-pointer items-center justify-center rounded-full text-icon-default transition-colors hover:bg-bg-subtle hover:text-text-heading"
            >
              <X size={20} strokeWidth={2} aria-hidden />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3">
            <ul className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-base font-medium leading-6 text-text-heading transition-colors hover:bg-bg-subtle hover:text-primary-default",
                        isActive && "bg-primary-subtle-bg text-primary-default",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="shrink-0 border-t border-border-subtle px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
            <div className="flex flex-col gap-2.5">
              <LanguageSwitcher className="w-full justify-center" />
              <RegisterButton
                className="w-full justify-center py-2.5"
                onClick={onClose}
              />
              <LoginButton
                className="w-full justify-center py-2.5"
                onClick={onClose}
              />
            </div>
          </div>
        </motion.nav>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
