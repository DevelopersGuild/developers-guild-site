export default {
  head: {
    title: "Developers Guild",
    meta: [
      { charset: "utf-8" },
      { "theme-color": "#000000" },
      { viewport: "width=device-width, initial-scale=1" },
      { "og:image": "https://da-developers.dev/_nuxt/assets/og.jpg" },
      { "og:image:url": "https://da-developers.dev/_nuxt/assets/og.jpg" },
      {
        "og:image:secure_url": "https://da-developers.dev/_nuxt/assets/og.jpg",
      },
      { "og:image:type": "image/jpeg" },
      { "og:title": "Developers Guild" },
      { "og:type": "website" },
      {
        description:
          "Developers’ Guild started in 2014 with the goal of facilitating the exploration of computer science through hands-on experience. Developers’ Guild creates a casual environment to practice real-world programming. We foster a community of avid programmers by tackling projects that interest us, participating and competing in events, and gathering skills and experience for the future.",
      },
      {
        "og:description":
          "Developers’ Guild started in 2014 with the goal of facilitating the exploration of computer science through hands-on experience. Developers’ Guild creates a casual environment to practice real-world programming. We foster a community of avid programmers by tackling projects that interest us, participating and competing in events, and gathering skills and experience for the future.",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png?v=3" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
      },
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
      },
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
      },
    ],
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
