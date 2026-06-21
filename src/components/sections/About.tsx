import { motion } from "motion/react";
import { Section } from "@/components/common/Section";

export function About() {
  return (
    <Section
      id="about"
      num="I"
      eyebrow="শুরুতেই একটি কথা"
      title={
        <>
          তিনি কে নন, <span className="text-gold">এবং তিনি কে।</span>
        </>
      }
    >
      <div className="grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5 md:border-r md:border-border/60 md:pr-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
            যা তিনি নন
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            তিনি কোনো স্বীকৃত বিশ্ববিদ্যালয়ের মনোবিজ্ঞান বিভাগের সনদধারী বিজ্ঞানী নন। কোনো
            হাসপাতালের চেম্বারে বসে পরামর্শ দেওয়া পেশাদার থেরাপিস্টও নন।
          </p>
        </div>
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
            যা তিনি
          </p>
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            তিনি সেই মানুষ - যিনি <em className="gold-text not-italic">জীবনের মাঠ</em> থেকে শিখেছেন।
            অভিজ্ঞ মানুষের পাশে বসে শুনেছেন, ব্যর্থতার মুখে দাঁড়িয়ে বুঝেছেন, মাঠে-মাটিতে-মানুষের
            ভেতরে ডুব দিয়ে আবিষ্কার করেছেন এমন সব সত্য - যা পাঠ্যবইয়ে লেখা থাকে না।
          </p>
        </div>
      </div>

      <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        তিনি কোনো বিশেষজ্ঞের বিকল্প নন। তিনি আপনার পাশে হাঁটা সেই সঙ্গী —
        <span className="text-foreground"> যে নিজেও পথ খুঁজেছে, এখনও খোঁজে,</span> এবং সেই খোঁজার
        অভিজ্ঞতাটুকু আপনার সাথে ভাগ করে নিতে চায়।
      </p>

      {/* The big question */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mt-16 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-navy-deep/60 to-transparent p-6 sm:p-10 md:mt-24 md:p-16"
      >
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute left-10 -top-3 bg-background px-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
          দশ বছরের প্রশ্ন
        </div>
        <div className="font-serif text-7xl leading-none text-gold/30 absolute top-6 right-8">
          "
        </div>
        <p className="font-serif text-2xl sm:text-3xl md:text-5xl leading-[1.2] max-w-3xl relative">
          মানুষ <span className="text-gold/90">জানে</span> কী করতে হবে,
          <br />
          তবুও কেন <span className="gold-text">করে না?</span>
        </p>
        <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground relative">
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono uppercase tracking-[0.25em] text-[11px]">
            a question that hunted him for a decade
          </span>
        </div>
      </motion.div>

      <p className="mt-14 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        এই প্রশ্নের উত্তর খুঁজতে গিয়ে তিনি পড়েছেন, শুনেছেন, ভুল করেছেন এবং আবার উঠে দাঁড়িয়েছেন।
        দেশ-বিদেশের অভিজ্ঞ মনোবিদ, কোচ ও দার্শনিকদের কাছ থেকে শিখেছেন —
        <span className="text-foreground">
          {" "}
          সেই শেখার সারটুকু এখন তিনি ঢেলে দিচ্ছেন মানুষের কাজে।
        </span>
      </p>
    </Section>
  );
}
