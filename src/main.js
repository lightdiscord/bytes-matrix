import Vue from 'vue';

import { Menu, View } from '@/sections';

import { Router } from './views';
import Store from './store';
import * as serviceWorker from './service-worker';

import './assets/style.scss';

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
}

Vue.config.productionTip = false;

const router = Router();
const store = Store();

const register = (section, el) => new Vue({
  router,
  store,
  el,
  render: h => h(section),
});

register(Menu, '#menu');
register(View, '#view');

store.commit('create');
