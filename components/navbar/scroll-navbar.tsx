"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MOTION_EASE } from "@/components/motion/motion-config";
import { Navbar } from "./navbar";

const SHOW_THRESHOLD = 72;
const HIDE_THRESHOLD = 24;

export function ScrollNavbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const y = window.scrollY;
      setScrolled((current) => {
        if (reduceMotion) return y > SHOW_THRESHOLD;
        if (current) return y > HIDE_THRESHOLD;
        return y > SHOW_THRESHOLD;
      });
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  return (
    <>
      {/* Mobile: fixed header that stays visible while scrolling */}
      <div className="fixed inset-x-0 top-0 z-40 xl:hidden">
        <Navbar
          activeHref={pathname}
          variant="standalone"
          className="shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)]"
        />
      </div>

      {/* Desktop: reveal on scroll — animate `top` (not transform) to keep logo/text sharp */}
      <div className="hidden xl:block">
        <AnimatePresence mode="wait">
          {scrolled ? (
            <motion.div
              key="scroll-navbar"
              initial={reduceMotion ? false : { top: -80, opacity: 0 }}
              animate={{ top: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { top: -80, opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.42,
                ease: MOTION_EASE,
                opacity: { duration: reduceMotion ? 0 : 0.32 },
              }}
              className="fixed inset-x-0 z-40"
            >
              <Navbar
                activeHref={pathname}
                variant="standalone"
                className="shadow-[0px_4px_16px_rgba(63,63,68,0.08)]"
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
