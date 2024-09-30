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


  export default routes;