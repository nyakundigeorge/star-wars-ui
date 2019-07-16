import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FishUI from 'fish-ui'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'

library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(FishUI);
Vue.use(VModal);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
