import Vue from 'Vue'//导入路由插件
import Router from 'vue-router'//导入上面定义的组件

import Login from "../views/Login";
import Home from "../views/Home";
import ProductInfo from "../views/ProductInfo";
import ProductList from "../views/ProductList";
Vue.use(Router);//安装路由
//配置路由
export default new Router({
  routes:[
    {
      //路由路径
      path:'/Login',
      //路由名称
      name:'Login',
      //跳转到组件
      component: Login
    },
    {
      //路由路径
      path:'/Logout',
      //重定向
      redirect:'/Login',
      //跳转到组件

    },
    {
      //路由路径
      path:'/Home',
      //路由名称
      name:'Home',
      //跳转到组件
      component: Home,
      children:[
        {
          //路由路径
          path:'/ProductList',
          //路由名称
          name:'ProductList',
          //跳转到组件
          component: ProductList
        },
        {
          //路由路径
          path:'/ProductInfo',
          //路由名称
          name:'ProductInfo',
          //跳转到组件
          component: ProductInfo
        }
      ]
    }
  ]
})
