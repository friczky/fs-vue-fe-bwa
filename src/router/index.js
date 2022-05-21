import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('@/views/HomeView.vue')
    },
    {
        path: '/product',
        name: 'product',
        component: () =>
            import ('@/views/ProductView.vue')
    },
    {
        path: '/shoppingcart',
        name: 'shoppingcart',
        component: () =>
            import ('@/views/ShoppingCartView.vue')
    },
    {
        path: '/success',
        name: 'successview',
        component: () =>
            import ('@/views/SuccessView.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router