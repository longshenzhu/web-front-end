import vue from 'vue';
import VueRouter from 'vue-router'

vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            index: 2
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            index: 1
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            index: 2
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes: routes
})


export default router;