import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "animate.css/animate.min.css"
window.fontawsome = require("@fortawesome/fontawesome-free");
window.bootstrap = require("bootstrap");
window.$ = window.jQuery = require("jquery");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
