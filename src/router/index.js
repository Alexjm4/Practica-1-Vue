
import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import ContadorView from '../views/ContadorView.vue'
import ListaTareasView from '../views/ListaTareasView.vue'
import CatalogoView from '../views/CatalogoView.vue'

const rutas = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView,
  },
  {
    path: '/contador',
    name: 'contador',
    component: ContadorView,
  },
  {
    path: '/tareas',
    name: 'tareas',
    component: ListaTareasView,
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: CatalogoView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: rutas,
})

export default router
  