import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import store from './store'

const app = createApp(App).use(store)

app.use(router).use(ElementPlus).mount('#app')
