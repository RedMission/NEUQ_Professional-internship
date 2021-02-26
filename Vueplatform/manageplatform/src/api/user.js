import { request } from '../utils/request'
import staticRouter from '@/router/staticRouter'

// 登录与注册接口
export const requestLogin = params => {
  return request('/api/user/login', params).then(data => {
    localStorage.setItem('user-token', JSON.stringify(data.token))
    return data
  })
}
export const requestRegister = params => {
  return request('/api/user/register', params)
}
// 分离登录与获取用户信息接口
export const requestUserInfo = params => {
  return request('/api/user/info', params).then(res => {
    // 过滤菜单
    const filterUserMenu = function (menus, accessMenu) {
      menus.forEach(function (m) {
        if (m.noMenu) {
          return
        }
        if (m.children) {
          const subMenu = []
          filterUserMenu(m.children, subMenu)
          if (subMenu.length > 0) {
            const _aMenu = Object.assign({}, m)
            _aMenu.children = subMenu
            accessMenu.push(_aMenu)
          }
        } else {
          res.permissions.some(p => p.name === m.name) && accessMenu.push(m)
        }
      })
    }
    const accessMenu = []
    let menus = []
    staticRouter.forEach(r => {
      menus = r.menu ? menus.concat(r.children) : menus
    })
    filterUserMenu(menus, accessMenu)
    res.accessMenu = accessMenu
    return res
  })
}

// 订单查询
export const requestUserQuery = params => {
  return request('https://www.liulongbin.top:8888/api/private/v1/orders', params)
}

export const requestLogout = params => {
  return request('/api/user/logout', params)
}
// 修改密码
export const requestChangePassword = params => {
  return request('/api/user/changePassword', params)
}
// 权限查询
export const requestPermissionsQuery = params => {
  return request('/api/user/permissions', params)
}
