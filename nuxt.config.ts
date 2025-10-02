// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/app.css"],
  modules: ["@vueuse/nuxt", "@nuxt/image", "@nuxt/fonts"],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
  },

 fonts: {
    families: [
      {
        name: "Work Sans",
        provider: "google",
         variable: true,
         display: "swap",
        weights: [200, 300, 400, 500, 600] // all weights
      }
    ]
  },
image: {
    format: ["webp"],
    provider: "twicpics",
    twicpics: {
      baseURL: ""
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      htmlAttrs: {
        lang: 'en',
      }
    }
  }
});
