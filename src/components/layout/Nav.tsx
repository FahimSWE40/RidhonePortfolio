import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { navLinks } from "@/data/profile";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold via-gold-soft to-gold-deep animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-[3px] rounded-full bg-background flex items-center justify-center">
              <span className="font-serif text-sm gold-text font-bold">রি</span>
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-base text-foreground">রিদওয়ান</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold/70">est. 1996</span>
          </div>
        </div>

        {/* desktop links */}
        <div className="hidden gap-10 text-sm text-muted-foreground md:flex">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="group relative hover:text-gold transition-colors">
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#words"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-colors"
        >
          যোগাযোগ <span>→</span>
        </a>

        {/* mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-card hover:text-gold"
                >
                  {label}
                </a>
              ))}
              <a
                href="#words"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-colors"
              >
                যোগাযোগ <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
