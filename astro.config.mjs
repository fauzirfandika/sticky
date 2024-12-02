import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  output:'server',
  adapter: cloudflare({
    imageService:'cloudflare',
    platformProxy: {
<<<<<<< HEAD
      enabled: true,
      configPath: 'wrangler.toml',
    },
=======
      enabled: true
    }
>>>>>>> main
  })
});
