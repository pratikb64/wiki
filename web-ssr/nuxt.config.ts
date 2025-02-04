// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  // Set the output directory for all assets and public files
  rootDir: ".",
  srcDir: ".",
  buildDir: "../wiki/www/.nuxt",

  // Configure public assets directory
  dir: {
    public: "../wiki/www",
  },

  // Configure build output
  nitro: {
    output: {
      dir: "../wiki/www/.output",
    },
  },

  // Configure static asset handling
  vite: {
    build: {
      outDir: "../wiki/www/dist",
      assetsDir: "assets",
    },
  },

  compatibilityDate: "2025-02-03",
});
