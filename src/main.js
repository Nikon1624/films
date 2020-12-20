import Vue from 'vue';
import App from './components/App/App.vue';
import router from '@/router/router';
import store from '@/store/store';

import '@/assets/css/normalize.css';
import '@/assets/css/style.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
