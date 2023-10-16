import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MainVolunteerView from '../views/MainVolunteerView.vue';
import MainOrganizerView from '../views/MainOrganizerView.vue';

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
    {
        path: '/organizador',
        name: 'MainOrganizerView',
        component: MainOrganizerView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;