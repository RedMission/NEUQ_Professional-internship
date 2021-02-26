/* 静态页面路由 */
const staticRouter = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/AppLogin')
  }, {
    path: '/register',
    name: '注册',
    component: () => import('@/views/login/AppRegister')
  }, {
    path: '/', // 嵌套路由路径为根路径
    menu: true,
    // [menu: true]说明此项下children是菜单目录配置，其他非菜单页面（如error）等不需要此值
    name: 'layout',
    component: () => import('@/views/layout/TheLayout'),
    children: [
      {
        path: '/index',
        name: 'index',
        title: '首页',
        icon: 'el-icon-s-home',
        component: () => import('@/views/pages/PageHome')
      }, {
        path: '/goodstable',
        name: 'goodtable',
        title: '商品管理',
        icon: 'el-icon-search',
        component: () => import('@/views/pages/goods/PageGoods')
      }, {
        path: '/order',
        name: 'order',
        title: '订单信息',
        icon: 'el-icon-s-operation',
        component: () => import('@/views/layout/TheLayoutEmpty'),
        children: [
          {
            path: '/order/table',
            name: 'table',
            title: '订单列表',
            component: () => import('@/views/pages/order/PageTable')
          },
          {
            path: '/order/line',
            name: 'line',
            title: '订单图表数据',
            component: () => import('@/views/pages/order/Pageline')
          }
        ]
      },
      {
        path: '/user',
        name: 'user',
        title: '用户管理',
        icon: 'el-icon-setting',
        component: () => import('@/views/layout/TheLayoutEmpty'),
        children: [
          {
            path: '/user/password',
            name: 'userPassword',
            title: '密码管理',
            component: () => import('@/views/pages/user/PageUserPassword')
          }, {
            path: '/user/permissions',
            name: 'userPermissions',
            title: '用户权限设置',
            component: () => import('@/views/pages/user/PageUserPermissions')
          }
        ]
      }
    ]
  }, {
    path: '/error/403',
    name: '错误403',
    component: () => import('@/views/error/AppError403')
  }, {
    path: '/error/500',
    name: '错误500',
    component: () => import('@/views/error/AppError500')
  }, {
    path: '*',
    name: '错误404',
    component: () => import('@/views/error/AppError404')
  }
]
export default staticRouter
