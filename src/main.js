import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import {
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavItem
} from 'bootstrap-vue-next'

const app = createApp(App)

app.component('BNavbar', BNavbar)
app.component('BNavbarBrand', BNavbarBrand)
app.component('BNavbarNav', BNavbarNav)
app.component('BNavItem', BNavItem)

app.use(router)
app.mount('#app')
