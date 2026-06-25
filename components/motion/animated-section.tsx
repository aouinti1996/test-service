"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  MOTION_DURATION,
  MOTION_EASE,
  MOTION_OFFSET,
  VIEWPORT_MARGIN,
} from "./motion-config";

export type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hero";
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  variant = "default",
  id,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion || variant === "hero") {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={cn(className)}
      initial={{ opacity: 0, y: MOTION_OFFSET.section }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      transition={{ duration: MOTION_DURATION.section, ease: MOTION_EASE }}
    >
      {children}
    </motion.section>
  );
}
