module.exports = {
  mode: "spa",
  head: {
    title: "Nuxt/DatoCMS Demo Site",
    meta: [
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "An example of implementing DatoCMS in a Nuxt.js project"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  build: {
    vendor: ["vex-js", "babel-polyfill", "eventsource-polyfill"],
    babel: {
      presets: [
        [
          "vue-app",
          {
            useBuiltIns: true,
            targets: { ie: 9, uglify: true }
          }
        ]
      ],
      plugins: ["transform-runtime"]
    }
  },

  modules: ["~/modules/scrape", "@nuxtjs/markdownit", "@nuxtjs/dotenv"],
  plugins: ["~/plugins/md-it", "~/plugins/findPoly"],
  css: [
    "~/node_modules/vex-js/dist/css/vex.css",
    "~/node_modules/vex-js/dist/css/vex-theme-default.css"
  ],
  /* Customize the progress bar */
  loading: false,
  generate: {
    fallback: true
  },
  router: {
    middleware: "redirects"
  }
}
