import { createRouter, createWebHistory } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia';
import DashboardView from '@/views/DashboardView.vue';
import authRoutes from './authRoutes';
import poolRoutes from './poolRoutes';
import userRoutes from './userRoutes';
import type { Route } from '@/models/route';

const routes: Route[] = [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      meta: {
        title: 'Dashboard',
        label: 'Dashboard',
      }
    },
    
    ...authRoutes,
    ...poolRoutes,
    ...userRoutes
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Yield Guru Admin`;

  // update sidebarStore with current page
  const sidebarStore = useSidebarStore();
  const {page} = storeToRefs(sidebarStore);
  page.value = to.meta.title;
  

  next()
})

export default router
