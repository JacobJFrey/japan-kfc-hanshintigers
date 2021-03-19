import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Form from '@/views/Form.vue'
import DragAndDrop from '@/views/DragNDrop.vue'
import Simulator from '@/views/Simulator.vue'
import Movie from '@/views/Movie.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  { path: '/', name: 'Home', component: Home },
  { path: '/Form', name: 'Form', component: Form },
  { path: '/Drag', name: 'DragAndDrop', component: DragAndDrop},
  { path: '/Simulator', name: 'Simulator', component: Simulator},
  { path: '/Movie', name: 'Movie', component: Movie}
  ],
})

export default router
