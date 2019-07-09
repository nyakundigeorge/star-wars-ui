import Vue from 'vue'
import App from './App.vue'
import FishUI from 'fish-ui'

Vue.use(FishUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
