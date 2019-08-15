import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

import storeConfig from './store';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store(storeConfig);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
