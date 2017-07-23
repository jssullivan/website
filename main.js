import Vue from 'vue'
import App from './App.vue'
import storePlugin from './data' 
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll) 
Vue.use(storePlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
