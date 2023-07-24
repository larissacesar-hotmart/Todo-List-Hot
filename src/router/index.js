import Vue from 'vue';
import VueRouter from 'vue-router'


import Home from '@/views/Home'
import ListaAtivos from '@/views/kanban/ListaAtivos.vue'

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'ativos',
    path: '/ativos',
    component: ListaAtivos,
  }
];

const router = new VueRouter({ routes });

export default router;
