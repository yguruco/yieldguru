import ProfileView from "@/views/ProfileView.vue";
import SettingsView from "@/views/SettingsView.vue";
import type { Route } from '@/models/route';

const userRoutes: Route[] = [
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        meta: {
          title: 'Profile',
          label: 'Profile',
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsView,
        meta: {
          title: 'Settings',
          label: 'Profile',
        }
      },
];

export default userRoutes;