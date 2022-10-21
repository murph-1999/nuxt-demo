/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-09 13:40:23
 * @LastEditTime: 2022-10-21 14:47:16
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/main.css', 'swiper/dist/css/swiper.css', 'element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-notifications.js', ssr: false },
    { src: '@/plugins/swiper', ssr: false },
    // { src: '@/plugins/element-ui.js', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // proxy: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    transpile: ['vue-notifications'],
  },
  // use middleware globally
  // router: {
  //   middleware: 'stats'
  // }

  // 配置应用的服务器实例变量
  server: {
    // 注意localhost只能本机访问，生产环境需要使用0.0.0.0
    host: '0.0.0.0',
    port: 3000,
  },
}
