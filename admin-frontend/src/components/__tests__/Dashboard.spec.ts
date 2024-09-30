import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils'
import DashboardView from '@/views/Dashboard/DashboardView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/authRoutes';


// Mock router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Dashboard', () => {
  router.beforeEach(() => {
    setActivePinia(createPinia()); // Set up Pinia
  });

  it('renders dashboard properly', async () => {
    const wrapper = mount(DashboardView, {
      props: { msg: 'Hello Dashboard' },
      global: {
        plugins: [createPinia(), router], // Include router in the test
      },
    });

    // Ensure router is ready before assertions
    await router.isReady();

    expect(wrapper.exists()).toBe(true);
  });
});

