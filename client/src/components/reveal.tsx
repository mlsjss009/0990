import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  amount?: number;
  as?: "div" | "span";
};

/**
 * Single source of truth for on-page motion.
 * Reveals once when scrolled into view and renders static when the user
 * prefers reduced motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
  amount = 0.25,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "span" ? motion.span : motion.div;

  if (reduceMotion) {
    const Static = as === "span" ? "span" : "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
