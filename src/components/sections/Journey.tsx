import { motion } from "motion/react";
import { Section } from "@/components/common/Section";
import { cn } from "@/lib/utils";
import { journey } from "@/data/profile";

export function Journey() {
  return (
    <Section id="journey" num="II" eyebrow="সময়ের রেখায়" title="যে পথে হাঁটছেন">
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:-translate-x-px" />

        <div className="space-y-12">
          {journey.map((j, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={j.y}
                initial={{ opacity: 0, x: left ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={cn(
                  "relative grid md:grid-cols-2 gap-6 md:gap-12",
                  !left && "md:[&>:first-child]:order-2",
                )}
              >
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 z-10">
                  <div className="relative h-4 w-4 rounded-full bg-gold ring-4 ring-background">
                    <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-40" />
                  </div>
                </div>

                <div className={cn("pl-12 md:pl-0", left ? "md:text-right md:pr-12" : "md:pl-12")}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold/70 mb-2">
                    {j.y}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl gold-text mb-3">{j.t}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground max-w-md sm:text-base md:inline-block">
                    {j.d}
                  </p>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
