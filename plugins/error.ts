export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error')
  })

  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error')
  })

  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.log('global error handler')
  }
})
