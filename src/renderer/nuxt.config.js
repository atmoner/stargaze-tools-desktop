/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'stargaze-desktop',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [
    {ssr: true, src: '@/plugins/icons.js'},
    
    
  ],
  buildModules: [
  '@nuxtjs/vuetify',
    
  ],
  modules: [
 
  ],
  plugins: [
    '~/plugins/vuetify.js'
  ], 
};
