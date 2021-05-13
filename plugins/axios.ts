import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin((context) => {
  context.$axios.onRequest((_config) => {
    // console.log('🚀 ' + config.url)
    // console.log(config.params || '...')
  })

  // $axios.onResponse((response) => {
  //   console.log(response.data)
  // })

  context.$axios.onError((error) => {
    if (error.response && error.response.data) {
      console.log(error.response.data)
      return error.response.data
    } else {
      console.log(error.response)
      return error.response
    }
  })
})
