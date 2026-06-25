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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const y = window.scrollY;
      setVisible((current) => {
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
    <AnimatePresence mode="wait">
      {visible ? (
        <motion.div
          key="scroll-navbar"
          initial={reduceMotion ? false : { y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? undefined : { y: "-100%", opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.42,
            ease: MOTION_EASE,
            opacity: { duration: reduceMotion ? 0 : 0.32 },
          }}
          className="fixed inset-x-0 top-0 z-40 will-change-transform"
        >
          <Navbar
            activeHref={pathname}
            variant="standalone"
            className="shadow-[0px_4px_16px_rgba(63,63,68,0.08)]"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
