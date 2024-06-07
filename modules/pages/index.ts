import { defineNuxtModule, extendPages } from 'nuxt/kit'
import { resolve } from 'path'

export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      pages.push({
        name: 'Test',
        path: '/test',
        file: resolve(__dirname, './pages/test.vue'),
      })
    })
  },
})
