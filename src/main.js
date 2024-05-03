import './assets/main.css'

import App from './App.vue'
import HomePage from '@/pages/HomePage.vue'
import FavoritesPage from '@/pages/FavoritesPage.vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const pinia = createPinia()

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/favorites', name: 'FavoritesPage', component: FavoritesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(autoAnimatePlugin)
app.mount('#app')
