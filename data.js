/*
Solution found from Stack Overflow to get a global Vue object. 
https://stackoverflow.com/questions/37711756/how-to-setup-a-global-store-object
*/
import store from './text.json'

export default {  
  store,
  install (Vue, options) {
    Vue.prototype.$staticData = store
  }
}