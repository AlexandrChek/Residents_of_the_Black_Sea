import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from './views/HomePage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/search',
        component: () => import('./views/SearchView.vue')
    },
    {
        path: '/about',
        component: () => import('./views/AboutView.vue')
    },
    {
        path: '/stars',
        component: () => import('./views/ViewStars.vue')
    },
    {
        path: '/creature/:id',
        component: () => import('./views/CreatureView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.NODE_ENV),
    routes,
    scrollBehavior() {
        return {top: 0}
    }
})

export default router