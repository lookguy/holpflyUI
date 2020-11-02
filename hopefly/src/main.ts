import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Zxb from "./components/Zxb.vue"

import { createWebHashHistory, createRouter } from "vue-router"

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [{
    path: '/',
    component: Zxb
  }]
})


createApp(App).use(router).mount('#app')
