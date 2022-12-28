import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { locale as en } from "@/lang/en-US.json";
import { locale as zh } from "@/lang/zh-TW.json";
Vue.use(VueI18n)
let messages = {}
messages = { ...messages, en, zh }
const lang = localStorage.getItem('language') || 'zh';
console.log('目前語言：', lang);
const i18n = new VueI18n({
    locale: lang,
    messages,
})
export default i18n