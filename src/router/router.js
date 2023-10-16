import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MainVolunteerView from '../views/MainVolunteerView.vue';

const routes = [
    {
        path: '',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/voluntario',
        name: 'MainVolunteerView',
        component: MainVolunteerView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;