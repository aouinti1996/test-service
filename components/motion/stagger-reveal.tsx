"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  MOTION_DURATION,
  MOTION_EASE,
  MOTION_OFFSET,
  STAGGER_DELAY,
  VIEWPORT_MARGIN,
} from "./motion-config";

export type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function StaggerReveal({
  children,
  className,
  staggerDelay = STAGGER_DELAY,
}: StaggerRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: MOTION_OFFSET.item },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: MOTION_DURATION.item, ease: MOTION_EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
