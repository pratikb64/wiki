// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  appDir: "../wiki/public",
  // Set the production build output directory
  dir: {
    public: "./wiki/public",
    app: "./wiki/public",
    assets: "./wiki/public",
  },

  compatibilityDate: "2025-02-03",
});
