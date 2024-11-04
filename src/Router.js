import { createRouter, createWebHistory } from "vue-router";
import CocheComponent from './components/CocheComponent.vue'
import CustomersComponent from './components/CustomersComponent.vue'
import EmpleadoDetalle from './components/EmpleadoDetalle.vue'
import HomeComponent from './components/HomeComponent.vue'
import EmpleadosOficios from './components/EmpleadosOficios.vue'

const myRoutes = [

    {
        path: "/", component: HomeComponent
    },

    {
        path: "/empleadosoficios/:oficio", component: EmpleadosOficios
    },

    {
        path: "/coches", component: CocheComponent
    },

    {
        path: "/customers", component: CustomersComponent
    },

    {
        path: "/empleadosdetalle", component: EmpleadoDetalle
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;

