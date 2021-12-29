//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( '@/components/homeView.vue')
    }, 
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router