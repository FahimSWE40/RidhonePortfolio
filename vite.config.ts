import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
    }),
    viteReact(),
  ];

  // Production deploy adapter. Nitro auto-detects the host at build time:
  //   - on Vercel (VERCEL=1) it emits .vercel/output (Build Output API)
  //   - locally it falls back to a node-server build in .output
  // Override with NITRO_PRESET if you need a specific target.
  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(
      nitro({
        compatibilityDate: "2026-06-08",
        ...(process.env.NITRO_PRESET ? { preset: process.env.NITRO_PRESET } : {}),
      }),
    );
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    css: { transformer: "lightningcss" },
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins,
  };
});
