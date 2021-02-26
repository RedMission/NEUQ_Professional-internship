import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' //1.引入路由模块
import {routes} from './routes' //2.引入静态路由表

Vue.use(VueRouter); //3.使用路由模块

//4.创建一个VueRouter模块的实例
const router = new VueRouter({
  routes:routes
});
new Vue({
  el:'#app',
  router,//5.把router实例放入到vue实例中
  render:h => h(App)
})

