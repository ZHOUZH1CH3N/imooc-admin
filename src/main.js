import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element-plus
import installElementPlus from './plugins/element'
// 初始化样式表
import '@/styles/index.scss'
//导入SVGICON
import installIcons from '@/icons/index'
// 导入路由鉴权
import './permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)

app.use(store).use(router).mount('#app')
