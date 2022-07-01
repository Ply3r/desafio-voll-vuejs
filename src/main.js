import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faCartPlus,
  faCircleCheck,
  faCircleXmark,
  faCubes,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';

library
  .add(
    faBars,
    faCubes,
    faShoppingCart,
    faCartPlus,
    faCircleCheck,
    faCircleXmark,
  );

createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
