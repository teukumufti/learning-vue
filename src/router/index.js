import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Task1.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/databinding',
    name: 'Task2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Task2.vue')
    }
  },
  {
    path: '/two-way-data-binding',
    name: 'Task3',
    component: function () {
      return import('../views/Task3.vue')
    }
  },
  {
    path: '/conditions-and-loops',
    name: 'Task4',
    component: function () {
      return import('../views/Task4.vue')
    }
  },
  {
    path: '/lifecycle-hooks',
    name: 'Task5',
    component: function () {
      return import('../views/Task5.vue')
    }
  },
  {
    path: '/computed-properties',
    name: 'Task6',
    component: function () {
      return import('../views/Task6.vue')
    }
  },
  {
    path: '/props',
    name: 'Task7',
    component: function () {
      return import('../views/Task7.vue')
    }
  },
  {
    path: '/custom-event',
    name: 'Task8',
    component: function () {
      return import('../views/Task8.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
