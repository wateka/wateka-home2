// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inconsolata&family=M+PLUS+1:wght@400&family=M+PLUS+2:wght@500&family=Raleway:wght@600&display=swap' },
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/main.scss" as *;`
        }
      }
    }
  },
  devtools: { enabled: true },
})
