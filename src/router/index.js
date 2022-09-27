import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Cliente from '../components/Cliente.vue'
import Cita from '../components/Cita.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Login
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/user/cliente',
    name: 'cliente',
    component: Cliente
  },
  {
    path: '/user/cita',
    name: 'cita',
    component: Cita
  },
  {
    path: '/user/home',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
