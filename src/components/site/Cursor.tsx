"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { layers } from "./layers";

export function Cursor() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-80);
  const y = useMotionValue(-80);
  const scale = useMotionValue(1);
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.45 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 24 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const over = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      scale.set(target.closest("a, button") ? 1.65 : 1);
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
    };
  }, [reduce, scale, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="cursor-ring pointer-events-none fixed top-0 left-0 h-8 w-8 rounded-full border border-[var(--accent)]"
      style={{
        zIndex: layers.cursor,
        x: springX,
        y: springY,
        scale: springScale,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
