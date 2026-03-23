// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://iversontc.github.io",
  base: "/portafolios",
  vite: {
    plugins: [tailwindcss()],
  },
});
