export default function manifest() {
    return {
      name: "BullaMix.org",
      short_name: "BullaMix",
      description:
        "BullaMix es un sitio web donde puedes descargar musica mp3 totalmente gratis.",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#000000",
      orientation: "portrait",
      lang: "es-ES",
      icons: [
        {
          purpose: "any",
          src: "/assets/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          purpose: "maskable",
          src: "/assets/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      splash_pages: null,
      splash_screen: {
        fullScreen: true,
        backgroundColor: "#ffffff",
        showIcon: false,
      },
      related_applications: [],
      prefer_related_applications: false,
    };
  }
  