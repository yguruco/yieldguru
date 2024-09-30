
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { WagmiPlugin } from '@wagmi/vue';

import App from './App.vue'
import router from './router'
import { config } from '@/config/wagmi'

import './assets/scss/main.scss'

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .use(WagmiPlugin, { config }) // Inject the Wagmi plugin
    .use(VueQueryPlugin, {}) // Inject the Vue Query plugin
    .mount('#app')


