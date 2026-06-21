import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { EASE_OUT } from "@/lib/motion";

/** Floating button that appears after scrolling and returns to the top. */
export function BackToTop() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => setShow(v > 0.08));

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="উপরে ফিরে যান"
          className="group fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-background/70 text-gold backdrop-blur-md transition-colors hover:bg-gold hover:text-ink"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
