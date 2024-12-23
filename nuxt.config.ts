// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  // src目录
  srcDir: "src/",
  // 页面过渡动画
  app: {
    pageTransition: { name: "page", mode: "out-in" }
  },
})