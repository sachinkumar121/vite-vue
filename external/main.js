import { createApp } from 'vue'
import Invoices from './Invoices.vue';
import ExternalApp from './ExternalApp.vue';
import ExternalHome from './ExternalHome.vue';
import { createRouter, createWebHistory } from 'vue-router';

console.log(import.meta.env.BASE_URL + "external")
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL + "external"),
    routes: [
        {
            path: '/',
            name: 'ExternalHome',
            component: ExternalHome,
            children: [
                {
                  name: 'invoices',
                  path: '/invoices',
                  component: Invoices,
                },
            ]
        }
    ],
    scrollBehavior() {
        return { top: 0 }
    },
})

createApp(ExternalApp).use(router).mount('#external-app')