import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://bryanluu.github.io",
  integrations: [react()],
  trailingSlash: "ignore",
  image: {
    responsiveStyles: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: [
            "import",
            "global-builtin",
            "if-function",
            "color-functions",
          ],
        },
      },
    },
  },
});
