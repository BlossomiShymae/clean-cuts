// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: "/clean-cuts/",
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
    head: {
      htmlAttrs: {
        "data-bs-theme": "dark",
        "style": "background-image: url('https://raw.communitydragon.org/14.9/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/498/498004.jpg');"
      },
      bodyAttrs: {
        class: "h-100"
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "title", content: "Clean Cuts"},
        { name: "og:title", content: "Clean Cuts"},
        { name: "og:description", content: "Making game data viewable in a human-friendly format."},
        { name: "og:image", content: "https://blossomishymae.github.io/clean-cuts/favicon.png"},
        { name: "theme-color", content: "#000000"}
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
          integrity:
            "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "/clean-cuts/css/app.css",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/clean-cuts/favicon.png",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
})
