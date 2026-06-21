import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ratulImg from "@/assets/ratul.png";
import { Stat } from "@/components/common/Stat";
import { fadeUp, EASE_OUT } from "@/lib/motion";
import { identities, stats } from "@/data/profile";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={heroRef}
      className="relative mx-auto max-w-7xl px-5 pt-14 pb-20 sm:px-6 md:pt-28 md:pb-32"
    >
      {/* corner ticks */}
      <div className="absolute left-6 top-20 h-12 w-12 border-l border-t border-gold/40" />
      <div className="absolute right-6 top-20 h-12 w-12 border-r border-t border-gold/40" />

      {/* giant ghost initial — editorial depth */}
      <span
        className="pointer-events-none absolute left-0 top-1/2 -z-[1] -translate-y-1/2 select-none font-serif font-black leading-none text-[clamp(20rem,40vw,44rem)] text-gold/[0.04]"
        aria-hidden
      >
        রি
      </span>

      <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          style={{ y: titleY }}
          className="md:col-span-7"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-card/30 py-1.5 pl-2.5 pr-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-gold/80">
              পরিচয়
            </span>
          </div>

          <h1 className="font-serif font-black leading-[1.1]">
            <span className="shimmer-gold block pb-1 text-[clamp(2.5rem,7vw,6rem)] leading-[1.15]">
              মো: রিদওয়ান
            </span>
            <span className="mt-1 flex items-center gap-4 text-foreground/70">
              <span className="font-serif text-[clamp(1.25rem,3.2vw,2.25rem)] font-light leading-[1.3] tracking-wide">
                তাসকিন রাতুল
              </span>
              <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent sm:block" />
            </span>
          </h1>

          <div className="mt-10 max-w-xl">
            <p className="font-serif text-xl leading-relaxed text-foreground/90 sm:text-2xl md:text-3xl font-light">
              "কিছু মানুষ জীবনকে একটি{" "}
              <span className="text-gold underline decoration-1 underline-offset-[6px]">লেন্স</span>{" "}
              দিয়ে দেখেন।
              <br />
              রিদওয়ান তাসকিন রাতুল দেখেন <span className="text-gold">অনেকগুলো</span> দিয়ে।"
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {identities.map((id, i) => (
              <motion.span
                key={id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="rounded-full border border-border bg-card/40 px-4 py-1.5 text-sm text-foreground/85 backdrop-blur-md hover:border-gold/60 hover:text-gold transition-colors"
              >
                {id}
              </motion.span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft px-7 py-3 text-sm font-medium text-ink shadow-[0_10px_40px_-10px_oklch(0.75_0.16_80/0.6)] hover:shadow-[0_20px_60px_-10px_oklch(0.75_0.16_80/0.8)] transition-all"
            >
              পরিচয় জানুন
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#words"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <span className="h-px w-8 bg-gold/60" /> তাঁর কথা পড়ুন
            </a>
          </div>

          <div className="mt-14 grid max-w-lg grid-cols-3 border-t border-border/60 pt-8 md:mt-16">
            {stats.map((s, i) => (
              <Stat
                key={s.l}
                n={s.n}
                l={s.l}
                className={i > 0 ? "border-l border-border/60 pl-4 sm:pl-8" : undefined}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE_OUT }}
          style={{ y: imageY }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto w-full max-w-sm floaty">
            {/* decorative frame */}
            <div className="absolute -inset-8 rounded-[2.5rem]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-gold/40 via-primary/20 to-transparent blur-2xl" />
            </div>
            <div className="absolute -right-6 -top-6 z-20 flex h-28 w-28 items-center justify-center rounded-full border border-gold/60 bg-background/60 backdrop-blur text-[10px] uppercase tracking-[0.3em] text-gold/80">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 animate-[spin_20s_linear_infinite]"
              >
                <defs>
                  <path id="circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text fontSize="9" fill="currentColor" className="text-gold">
                  <textPath href="#circle">গবেষক · কোচ · শিল্পী · কৃষক · </textPath>
                </text>
              </svg>
              <div className="h-3 w-3 rounded-full bg-gold animate-pulse" />
            </div>

            <div className="gold-glow group relative overflow-hidden rounded-[2rem] border border-gold/40 bg-card shadow-[0_30px_80px_-20px_oklch(0_0_0/0.6)]">
              <img
                src={ratulImg}
                alt="মো: রিদওয়ান তাসকিন রাতুল"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* gold corner accents */}
              <div className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-gold" />
              <div className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-gold" />
              <div className="pointer-events-none absolute left-3 bottom-3 h-6 w-6 border-l-2 border-b-2 border-gold" />
              <div className="pointer-events-none absolute right-3 bottom-3 h-6 w-6 border-r-2 border-b-2 border-gold" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-6">
                <div className="flex items-end justify-between"></div>
              </div>
            </div>

            {/* signature card */}
            <div className="absolute -bottom-8 -left-8 hidden md:flex flex-col rounded-2xl border border-gold/40 bg-card/90 backdrop-blur px-5 py-3 shadow-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                signature
              </span>
              <span className="font-serif text-gold text-xl">~ রিদওয়ান</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="mt-20 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        নিচে স্ক্রল করুন
        <span className="h-px w-8 bg-border" />
      </div>
    </section>
  );
}
