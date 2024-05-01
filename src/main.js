import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useFavoritesStore } from '@/stores/FavoritesStore'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount('#app')

const favoritesStore = useFavoritesStore()