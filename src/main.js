import { createApp } from 'vue'
import App from './App.vue';
// import Home from './Home.vue';
// import ExternalPage from './ExternalPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import JsonCSV from 'vue-json-csv';

const routes = [
    {
        name: "Home",
        path: "/",
        children: [
            {
                path: '',
                component: () => import('./Home.vue')
            },
            {
                path: '/dashboard',
                component: () => import('./Dashboard.vue')
            },
            {
                path: '/external-page',
                component: () => import('./ExternalPage.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

createApp(App).use(router).component('download-csv', JsonCSV).mount('#app')
