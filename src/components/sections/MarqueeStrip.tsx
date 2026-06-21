import { marqueeWords } from "@/data/profile";

export function MarqueeStrip() {
  const words = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <div className="relative border-y border-gold/20 bg-gradient-to-r from-transparent via-navy-deep/40 to-transparent py-6 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {words.map((w, i) => (
          <span
            key={i}
            className="font-serif text-xl md:text-2xl mx-6 flex items-center gap-6 text-foreground/40"
          >
            {w}
            <span className="text-gold/60 text-sm">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
