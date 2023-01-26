import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import RequestPassword from '../views/RequestPassword.vue';
import ResetPassword from '../views/ResetPassword.vue';
import Dashboard from '../views/Dashboard.vue';
import store from '../store/index.js';
import AppLayout from '../components/AppLayout.vue';
import Product from '../views/Product.vue';
import NotFound from '../views/NotFound.vue';


const routes = [

    
    {
        path: "/app",
        name: "app",
        component: AppLayout,
        
        meta: {
            requiresAuth: true,
        },

        children: [
            {
                path: "dashboard",
                name: "app.dashboard",
                component: Dashboard,
            },
            {
                path: "product",
                name: "app.product",
                component: Product,
            },
        ],
    },

    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/RequestPassword",
        name: "RequestPassword",
        component: RequestPassword,
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/ResetPassword/:token",
        name: "ResetPassword",
        component: ResetPassword,
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "notFound",
        component: NotFound,
        
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
      next({ name: "login" });
    } else if(to.meta.requiresGuest && store.state.user.token){
        next({ name: "app.dashboard" })
    } else {
        next();
    }
});

export default router;
