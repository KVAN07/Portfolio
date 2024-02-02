import { createRouter, createWebHistory } from 'vue-router'


import Info from '../pages/Info.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'info',component: Info},
        {path: '/projects', name:'projects',component: () => import('../pages/Projects.vue')},
    ]
})
