// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://chrisberlant.github.io",
    base: "astro-portfolio",
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
    ],
});
