import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";

const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);

import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  server: {
    host: mobile ? "0.0.0.0" : false,
    port: 4321,
  },
  integrations: [solidJs(), playformInline(), playformCompress()]
});
