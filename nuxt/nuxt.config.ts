// https://nuxt.com/docs/api/configuration/nuxt-config
import { name, description, version } from "./package.json";

// todo these should be split out into small helper funcs
const isDocker = process.env?.NUXT_IS_DOCKER === "true";
const isProd = process.env.NODE_ENV?.includes("prod");
const isTest = process.env.NODE_ENV?.includes("test");
const isDev = process.env.NODE_ENV?.includes("dev");

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: !isProd },
  css: ["@/assets/style/main.scss"],
  image: {
    dir: "assets/images",
  },
  app: {
    head: {
      charset: "utf-8",
      link: [],
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "lang", content: "en" },
        { name: "version", content: version },
      ],
      script: [],
    },
  },
  site: {
    url: process.env?.APP_URL || "http://localhost:3000",
    name,
    description,
    defaultLocale: "en",
    indexable: true,
  },
  modules: ["@nuxt/image", "@nuxtjs/seo"],
  runtimeConfig: {
    isDev,
    isTest,
    isProd,
    isDocker,
    public: {
      name: name || "",
      description: description || "",
      clientVersion: version || "",
      isProd,
    },
    admin: {
      username: process.env.NUXT_ADMIN_USERNAME,
      password: process.env.NUXT_ADMIN_PASSWORD,
      secret: process.env.NUXT_ADMIN_SECRET,
    },
  },
  sourcemap: {
    server: !isProd,
    client: !isProd,
  },
  robots: {
    allow: ["/"],
    disallow: [""],
  },
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { cors: true, ssr: true },
  },
  nitro: {
    minify: true,
    serveStatic: !isDocker,
    compressPublicAssets: true,
  },
});
