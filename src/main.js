import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import storeData from "./store/index"
createApp(App).use(ElementPlus).use(router).use(storeData).mount('#app')
