import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './routers/router'
import './styles/style.css'
import './styles/font.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
