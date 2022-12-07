import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  build: {
    transpile: ["swiper", "@googlemaps/js-api-loader"],
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml", "/portfolio"],
    },
  },

  routeRules: {
    // Static page generated on-demand, revalidates in background (ISG)
    "/uslugi/featy/**": { ssr: false },
    "/**": { ssr: true },

    // Static page generated on-demand once (SSG - or at least mighty close) { static: true },

    // Render these routes on the client (SPA) { ssr: false },
  },

  app: {
    head: {
      charset: "utf-8",
      htmlAttrs: {
        lang: "pl",
      },
      viewport: "width=device-width, initial-scale=1",
      title: "OK Graphics - twój grafik komputerowy",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          hid: `description`,
          name: "description",
          content:
            "OK Graphics, twój grafik komputerowy, loga, wizytówki, ulotki, plakaty, banery",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  buildModules: ["@pinia/nuxt"],

  css: ["@/assets/css/styles.css"],

  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },

  runtimeConfig: {
    public: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      cwd: process.cwd(),
      BASE_URL: process.env.BASE_URL,
      STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
    },
  },
});
