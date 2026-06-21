import { motion } from "motion/react";
import { Section } from "@/components/common/Section";
import { philosophies, type Philosophy } from "@/data/profile";

function PhilosophyCard({ tag, title, quote, body }: Philosophy) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="lift group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur hover:border-gold/50 hover:bg-card sm:p-10"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70 border border-gold/30 rounded-full px-3 py-1">
          {tag}
        </span>
        <span className="h-px flex-1 ml-6 bg-gradient-to-r from-gold/30 to-transparent" />
      </div>
      <h3 className="font-serif text-3xl mb-5 text-foreground relative">{title}</h3>
      <p className="font-serif text-lg gold-text mb-5 leading-relaxed relative sm:text-xl">
        "{quote}"
      </p>
      <p className="text-base leading-relaxed text-muted-foreground relative sm:text-[17px]">
        {body}
      </p>
    </motion.div>
  );
}

export function Philosophy() {
  return (
    <Section id="philosophy" num="IV" eyebrow="মাটি, মন ও মানুষ" title="যে দর্শন তাঁকে চালায়">
      <div className="grid gap-6 md:grid-cols-2">
        {philosophies.map((p) => (
          <PhilosophyCard key={p.tag} {...p} />
        ))}
      </div>
    </Section>
  );
}
