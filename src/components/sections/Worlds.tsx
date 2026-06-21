import { motion } from "motion/react";
import { Section } from "@/components/common/Section";
import { worlds } from "@/data/profile";

export function Worlds() {
  return (
    <Section id="worlds" num="III" eyebrow="একজন মানুষ" title="একাধিক জগৎ">
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground mb-10 sm:text-lg md:mb-16">
        বাইরে থেকে মনে হতে পারে এগুলো সম্পূর্ণ আলাদা জগৎ। কিন্তু রিদওয়ানের কাছে এগুলো একটিই সুতোয়
        গাঁথা -{" "}
        <span className="text-foreground">"মানুষকে তার সর্বোচ্চ সম্ভাবনায় পৌঁছে দেওয়া।"</span>
      </p>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border/40 md:grid-cols-3">
        {worlds.map((w, i) => (
          <motion.div
            key={w.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative bg-card p-8 transition-all hover:bg-navy-deep/70 md:p-10"
          >
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-xs text-gold/60 tracking-widest">{w.n}</span>
              <svg
                className="h-4 w-4 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl mb-3 text-foreground group-hover:gold-text transition-colors">
              {w.t}
            </h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{w.d}</p>
            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold via-gold-soft to-transparent group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
