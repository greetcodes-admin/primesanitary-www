import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/AboutUs.vue'
import Contact from '../pages/ContactUs.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
   scrollBehavior(to, from, savedPosition) {
    // browser back / forward
    if (savedPosition) {
      return savedPosition
    }

    // always scroll to top on route change
    return { top: 0 }
  }
})

export default router
