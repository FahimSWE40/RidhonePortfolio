import { cn } from "@/lib/utils";

type StatProps = { n: string; l: string; className?: string };

export function Stat({ n, l, className }: StatProps) {
  return (
    <div className={cn(className)}>
      <div className="font-serif text-3xl gold-text sm:text-4xl">{n}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-[11px] sm:tracking-[0.2em]">
        {l}
      </div>
    </div>
  );
}
