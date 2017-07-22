import Vue from 'vue'
import App from './App.vue'
import storePlugin from './data'  
Vue.use(storePlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
