import { defineConfig, passthroughImageService} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],  
  output: "server",
  adapter: deno(),
  image: {
    service: passthroughImageService(),
  },
  
});