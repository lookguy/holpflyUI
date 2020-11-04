
import Home from "./views/home.vue"
import Doc from "./views/Doc.vue"
import Switch from "./components/switch.vue"
import Button from "./components/button.vue"
import Dialog from "./components/dialog.vue"
import Tabs from "./components/tabs.vue"
import DocIndex from "./components/doc.vue"
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
    children: [
      {
        path: "",
        component: DocIndex
      }, {
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
