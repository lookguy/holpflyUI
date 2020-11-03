
import Home from "./views/home.vue"
import Doc from "./views/Doc.vue"
import Switch from "./views/switch.vue"
import Button from "./views/button.vue"
import Dialog from "./views/dialog.vue"
import Tabs from "./views/tabs.vue"
import { createWebHashHistory, createRouter } from "vue-router"

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [{
    path: '/',
    component: Home
  }, {
    path: "/doc",
    component: Doc,
    children: [{
      path: "switch-doc",
      component: Switch
    }, {
      path: "button-doc",
      component: Button
    }, {
      path: "dialog-doc",
      component: Dialog
    }, {
      path: "tabs-doc",
      component: Tabs
    },]
  }]
})

export default router
