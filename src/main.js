import { createApp } from 'vue';
import './css/normalize.css';
import './css/all.min.css';
import './css/main.css';
import App from './App.vue';
import * as VueRouter from 'vue-router';
import NotFoundPage from './pages/NotFoundPage.vue';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/About.vue';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Add SVG Core & Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const vueRouter = VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
    },
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
  ],

});

createApp(App).component('fa', FontAwesomeIcon).use(vueRouter).mount('#app');
