import SigninView from '@/views/Auth/SigninView.vue';
import SignupView from '@/views/Auth/SignupView.vue';
import type { Route } from '@/models/route';

const authRoutes: Route[] = [
    {
      path: '/auth/signin',
      name: 'signin',
      component: SigninView,
      meta: {
        title: 'Sign In',
        label: 'Signin',
      }
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: SignupView,
      meta: {
        title: 'Sign Up',
        label: 'SignUp',
      }
    }
  ];


  export default authRoutes;