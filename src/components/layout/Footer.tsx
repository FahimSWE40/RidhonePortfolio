export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-6 md:flex-row md:items-center">
        <div>
          <p className="font-serif text-xl gold-text sm:text-2xl">মাঠে · মাটিতে · মনের ভেতরে</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            one man · many worlds · one thread
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} মো: রিদওয়ান তাসকিন রাতুল</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em]">all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
