import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';

export const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'fa-cubes',
    component: Dashboard,
  },
  {
    path: '/products',
    name: 'products',
    icon: 'fa-cart-shopping',
    component: Dashboard,
  },
  {
    path: '/products/add',
    name: 'add Products',
    icon: 'fa-cubes',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
