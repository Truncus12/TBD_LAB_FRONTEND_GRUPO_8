import { createRouter, createWebHistory } from 'vue-router';

import LoginVolunteerView from '../views/LoginVolunteerView.vue';
import RegisterVolunteerView from '../views/RegisterVolunteerView.vue';
import MainVolunteerView from '../views/MainVolunteerView.vue';
import MainCoordinerView from '../views/MainCoordinerView.vue';
import EmergencyCreateView from '../views/EmergencyCreateView.vue';

const routes = [
    {
        path: '/',
        name: 'LoginVolunteerView',
        component: LoginVolunteerView,
    },
    {
        path: '/registrarse',
        name: 'RegisterVolunteerView',
        component: RegisterVolunteerView,
    },
    {
        path: '/voluntario',
        name: 'MainVolunteerView',
        component: MainVolunteerView,
    },
    {
        path: '/coordinador',
        name: 'MainCoordinerView',
        component: MainCoordinerView,
    },
    {
        path: '/coordinador/crear-emergencia',
        name: 'EmergencyCreateView',
        component: EmergencyCreateView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;