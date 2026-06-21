import { motion } from "motion/react";

export function ClosingQuote() {
  return (
    <section id="words" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-navy-deep via-ink to-background p-8 sm:p-12 md:p-24"
      >
        {/* ornamental rings */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-gold/15" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-gold/10" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />

        <div className="relative max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-16 bg-gold" />
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-gold">
              সবশেষে
            </span>
          </div>

          <p className="font-serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.1]">
            <span className="text-foreground">আমি মানুষকে ঠিক করতে আসিনি।</span>
            <br />
            <span className="text-muted-foreground">আমি মানুষকে মনে করিয়ে দিতে এসেছি -</span>
            <br />
            <span className="shimmer-gold">সে আসলে কতটা সক্ষম।</span>
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full border border-gold/50 flex items-center justify-center font-serif text-gold">
              রি
            </div>
            <div>
              <p className="font-serif text-lg text-foreground">মো: রিদওয়ান তাসকিন রাতুল</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                author · coach · seeker
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
