import Vue from 'vue';
import VueRouter from 'vue-router';

import Search from "./components/search.component";
import LandingPage from './components/landing-page.component.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/landing-page', name: 'LandingPage', component: LandingPage },
  { path: '/', name: 'Search', component: Search },
  { path: '*', redirect: '/' }
];

export default new VueRouter({
  mode: 'history',
  routes
});
