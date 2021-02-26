import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Content from './components/Content'
import bottom from './components/bottom'
import axios from 'axios'
import VueAxios from 'vue-axios'

//全局注册了三个组件==》 可以把组件拿来当标签一样的使用
Vue.component('MyHeader',Header);
Vue.component('MyContent',Content);
Vue.component('MyBottom',bottom);

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
