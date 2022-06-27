import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Products from '../views/Products.vue';

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
    component: Products,
  },
  {
    path: '/products/add',
    name: 'add Products',
    icon: 'fa-cart-plus',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
