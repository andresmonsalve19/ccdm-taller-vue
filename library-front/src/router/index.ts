import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue'
import FormView from '../views/FormView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Inicio",
        component: HomeView,
    },
    {
        path: "/libros",
        name: "Libros",
        component: BookView,
    },
    {
        path: "/crear",
        name: "Creación",
        component: FormView,
    },
    {
        path: "/compras",
        name: "compras",
        component: ShoppingCartView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router