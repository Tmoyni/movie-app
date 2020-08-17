import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

console.log('[i] Starting client app')

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  router,
  store,
  render: h => h(App),
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('http://www.omdbapi.com/?i=tt3896198&apikey=475aaa3c')
      .then(response => {
        console.log(response.data)
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}).$mount('#app')

// 475aaa3c