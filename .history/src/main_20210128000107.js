import Vue from 'vue'
import App from './App.vue'
import VueGoodTablePlugin from 'vue-good-table';
import ProgressBar from 'vue-simple-progress'

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false

new Vue({
  components:{
    ProgressBar
  },
  render: h => h(App),
}).$mount('#app')
