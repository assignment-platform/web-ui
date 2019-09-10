import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login';
import About from '@/components/About';
import Logout from '@/components/Logout';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/about', component: About},
    { path: '/logout', component: Logout },
    { path: '/', redirect: '/login' },
  ]
});
