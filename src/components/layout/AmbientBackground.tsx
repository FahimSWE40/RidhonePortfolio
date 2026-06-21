/** Fixed decorative layers: film grain, vignette, and the ambient gradient backdrop. */
export function AmbientBackground() {
  return (
    <>
      {/* Filmic texture + vignette */}
      <div className="grain grain-animate" aria-hidden />
      <div className="vignette" aria-hidden />

      {/* Ambient backdrop */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.30_0.14_260/0.5),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.45_0.12_75/0.18),transparent_60%)]" />

        {/* drifting gradient orbs */}
        <div className="orb orb-1 -left-[10%] -top-[10%] h-[45vw] w-[45vw] bg-[radial-gradient(circle,oklch(0.78_0.135_82/0.18),transparent_70%)]" />
        <div className="orb orb-2 -right-[15%] top-[20%] h-[50vw] w-[50vw] bg-[radial-gradient(circle,oklch(0.55_0.18_255/0.22),transparent_70%)]" />
        <div className="orb orb-3 bottom-[-10%] left-[20%] h-[40vw] w-[40vw] bg-[radial-gradient(circle,oklch(0.60_0.13_72/0.16),transparent_70%)]" />

        {/* animated aurora sweep */}
        <div className="aurora absolute inset-0" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>
    </>
  );
}
