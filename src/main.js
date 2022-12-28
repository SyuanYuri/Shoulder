import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import router from "@/router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Popper from "vue3-popper";
// import i18n from './plugins/i18n'
import zh from "@/lang/zh-TW.json";
import en from "@/lang/en-US.json";

const lang = localStorage.getItem("language") || "zh-TW";
console.log('lang',lang);
const i18n = createI18n({
  legacy: false,
  locale: lang,
  fallbackLocale: "zh-TW",
  globalInjection: true,
  messages: {
    "zh-TW": zh,
    "en-US": en,
  }
});

createApp(App).use(router).use(i18n).use(Popper).mount('#app')