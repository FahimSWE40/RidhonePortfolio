import { cn } from "@/lib/utils";

/** Animated loading placeholder with a gold shimmer sweep. */
export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden className={cn("skeleton rounded-md", className)} />;
}
