import Vue from 'vue'
import App from './App.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue';

Vue.config.productionTip = false
Vue.component('menu-icon', MenuIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
