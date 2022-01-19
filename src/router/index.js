//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( '@/components/Home.vue')
    }, 
    {
        path: '/test',
        name: 'test',
        component: () => import( '@/components/Choose.vue')
    }, 
    {
        path: '/store',
        name: 'store',
        component: () => import( '@/components/Store.vue')
    }, 
    {
        path: '/rent',
        name: 'store',
        component: () => import( '@/components/Rent.vue')
    }, 
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router