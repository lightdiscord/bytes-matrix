import Vue from 'vue';
import App from './App.vue';
import { Router } from './views';
import Store from './store';

import * as serviceWorker from './service-worker';

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
}

Vue.config.productionTip = false;

new Vue({
  router: Router(),
  store: Store(),
  render: h => h(App),
}).$mount('#app');
