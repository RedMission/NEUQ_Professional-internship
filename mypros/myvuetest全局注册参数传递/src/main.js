import Vue from 'vue'
import App from './App.vue'
import Header from "./components/Header";
import Content from "./components/Content";
import Bottom from "./components/Bottom";
// 全局注册三个组件
Vue.component('MyHeader',Header);
Vue.component('MyContent',Content);
Vue.component( 'MyBottom',Bottom);

new Vue({
  el: '#app',
  render: h => h(App)
})
