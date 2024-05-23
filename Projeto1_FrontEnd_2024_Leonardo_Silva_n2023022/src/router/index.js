import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import searchView from '@/views/searchView.vue'
import checkoutView from '@/views/checkoutView.vue'
import loginView from '@/views/loginView.vue'
import signupView from '@/views/signupView.vue'
import HomepageView from '@/views/HomepageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: HomepageView
    },
    {
      path: '/signup',
      name: 'signup',
      component: signupView
    },
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: searchView
    // },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkoutView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
