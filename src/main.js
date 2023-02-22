import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Popper from "vue3-popper";
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App).use(router).use(Popper).use(pinia).mount('#app')