import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Home from "./views/home.vue"
import Doc from "./views/Doc.vue"

import { createWebHashHistory, createRouter } from "vue-router"

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [{
    path: '/',
    component: Home
  }, {
    path: "/doc",
    component: Doc
  }]
})


createApp(App).use(router).mount('#app')
