import { createRouter, createWebHistory } from 'vue-router'
import vistaBuscar from '../views/vistaBuscar.vue'
import vistaMostrar from '../views/vistaMostrar.vue'
import vistaInsertar from '../views/vistaInsertar.vue'

const routes = [
  {
    path: '/',
    name: 'insertar',
    component: vistaInsertar
  },
 
  {
    path: '/mostrar',
    name: 'mostrar',
    component: vistaMostrar
  },
 
  {
    path: '/buscar',
    name: 'buscar',
    component: vistaBuscar
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
