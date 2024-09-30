import './assets/scss/main.scss';
import 'vue-final-modal/style.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueApexCharts from 'vue3-apexcharts';
import { timeAgo } from './utils/timeago';
import { marked } from 'marked';
import App from '@/App.vue';
import router from './router';
import { createVfm } from 'vue-final-modal'


const app = createApp(App)

const pinia = createPinia();
app.use(pinia);

app.use(createVfm());

app.use(router);
app.use(VueApexCharts)

app.provide('$utils', {
    assetUrl(value: string) {
        const base = './assets/';
        return `${base}${value}`
    },
});

app.config.globalProperties.$filters = {
    timeAgo: timeAgo,
    number(number: number, maximumSignificantDigits = 2, locale: string = 'en-US') {
        return new Intl.NumberFormat(locale, {maximumSignificantDigits}).format(number);
    },
    markdown(value: string) {
        return marked.parse(value);
    },
};


app.mount('#app')
