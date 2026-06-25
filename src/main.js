import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import plugin from './plugin'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './common/index.css'


createApp(App)
.use(router)
.use(plugin)
.use(ElementPlus)
.mount('#app')
