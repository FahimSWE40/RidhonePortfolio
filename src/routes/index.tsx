import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Worlds } from "@/components/sections/Worlds";
import { Philosophy } from "@/components/sections/Philosophy";
import { ClosingQuote } from "@/components/sections/ClosingQuote";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <AmbientBackground />
      <Nav />
      <Hero />
      <MarqueeStrip />
      <About />
      <Journey />
      <Worlds />
      <Philosophy />
      <ClosingQuote />
      <Footer />
      <BackToTop />
    </main>
  );
}
