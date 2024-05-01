import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import auth from "auth-astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), auth()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  site: import.meta.env.SITE_URL,
  server: {
    host: "0.0.0.0",
  },
});
