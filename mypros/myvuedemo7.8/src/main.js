// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router" //导入路由模块
//导入上面创建的路由配置目录
import router from './router'

import ElementUI from 'element-ui'; //完整引入Element-ui
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'//导入axios模块
import VueAxios from "vue-axios";

Vue.config.productionTip = false
Vue.use(VueRouter);//使用路由模块
Vue.use(ElementUI);//使用Element-ui
Vue.use(VueAxios,axios)//使用axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  render: h => h(App)
})
