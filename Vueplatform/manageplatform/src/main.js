import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 引入Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.scss'
import VCharts from 'v-charts'
/* 1. 导入国际化相关依赖 */
import VueI18n from 'vue-i18n'
import myEnLocale from './assets/lang/en'
import myZhLocale from './assets/lang/zh-cn'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// 进度条
// eslint-disable-next-line no-unused-vars
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(VCharts)

// 根据环境变量决定是否引入mock
if (process.env.NODE_ENV !== 'production' && !process.env.VUE_APP_BACK_END_URL) {
  const Mock = require('./mock/index').default
  Mock.mockData()
}

/* vue-i18n */
Vue.use(VueI18n)
// 2.1 支持两种语言，每种语言需要合并自己书写的语言文件和element-ui的同语言文件
const messages = {
  en: Object.assign(myEnLocale, enLocale),
  'zh-cn': Object.assign(myZhLocale, zhLocale)
}
// 2.2 加载用户语言设置，也可以把此值存放在后台
const lang = localStorage.getItem('user-language') || 'zh-cn'
// 2. 实例化VueI18n
const i18n = new VueI18n({
  locale: lang,
  messages
})
/* element-ui */
Vue.use(ElementUI, {
  // 3. element-ui默认支持vue-i18n@5.x版本，6.x以上的版本需要添加此配置项，当前已8.x
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
