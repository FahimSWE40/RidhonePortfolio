import { motion } from "motion/react";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  num: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
};

/** Chapter-style content section with a big ghosted numeral and eyebrow. */
export function Section({ id, num, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-10 grid gap-4 md:mb-16 md:grid-cols-12 md:items-end md:gap-6">
          <div className="md:col-span-3 relative">
            <div className="font-serif font-black text-[6rem] sm:text-[8rem] md:text-[11rem] text-gold/10 leading-[0.85] select-none pointer-events-none">
              {num}
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.5em] text-gold/80 md:mt-3">
              chapter {num}
            </div>
          </div>
          <div className="md:col-span-9 md:border-l md:border-border/60 md:pl-10">
            <div className="mb-3 text-[11px] uppercase tracking-[0.4em] text-gold/80 md:mb-4">
              {eyebrow}
            </div>
            <h2 className="font-serif font-bold text-4xl leading-[1.1] sm:text-5xl md:text-7xl">
              {title}
            </h2>
          </div>
        </div>
        {children}
      </motion.div>
    </section>
  );
}
