import Mock from 'mockjs'

export default {
  mockData () {
    const BASE_PATH = process.env.BASE_URL.endsWith('/')
      ? process.env.BASE_URL.substr(0, process.env.BASE_URL.length - 1)
      : process.env.BASE_URL
    Mock.mock(BASE_PATH + '/api/user/login', {
      code: 1,
      token: 'fdsjfhjkdshfkldsajfjasdfbjsdkfhsdajfj',
      result: {
        id: '1001',
        name: 'dzx',
        roles: ['admin']
      }
    })
    Mock.mock(BASE_PATH + '/api/user/register', {
      code: 1
    })
    Mock.mock('/api/user/info', {
      code: 1,
      id: '1001',
      name: 'dzx',
      roles: ['admin'],
      permissions: [
        {
          // 一个页面一个对象，以name确定（对应静态路由表里面的name）
          name: 'index'
        },
        { name: 'level4' },
        { name: 'goodtable' },
        { name: 'order' },
        { name: 'table' },
        { name: 'line' },
        { name: 'userPassword' },
        { name: 'userPermissions' },
        {
          name: 'level4Detail',
          // permission存储数据级权限控制
          permission: ['modify', 'delete']
        }
      ]
    })
    Mock.mock('/api/user/changePassword', {
      code: 1,
      token: 'fdsjfhjkdshfkldsajfjasdfbjsdkfhsdajfj'
    })
    Mock.mock('/api/user/query', {
      code: 1,
      'data|30-60': [
        {
          'name|1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
          'date|1': [Mock.mock('@date("yyyy-MM-dd")'), Mock.mock('@date("yyyy-MM-dd")'), Mock.mock('@date("yyyy-MM-dd")')],
          'address|1': [Mock.mock('@county(true)'), Mock.mock('@county(true)'), Mock.mock('@county(true)')]
        }
      ]
    })
    Mock.mock(BASE_PATH + '/api/user/permissions', {
      code: 1,
      permissions: {
        users: [
          {
            id: 1,
            name: 'Alex',
            roleIds: [1, 3]
          }, {
            id: 2,
            name: 'Phil',
            roleIds: [2, 3]
          }, {
            id: 3,
            name: 'Tom',
            roleIds: [3]
          }, {
            id: 4,
            name: 'Jhony11',
            roleIds: [1]
          }, {
            id: 2,
            name: 'Phil22',
            roleIds: [2, 3]
          }, {
            id: 3,
            name: 'Tom33',
            roleIds: [3]
          }, {
            id: 4,
            name: 'Jhony44',
            roleIds: [1]
          }, {
            id: 2,
            name: 'Phil',
            roleIds: [2, 3]
          }, {
            id: 3,
            name: 'Tom',
            roleIds: [3]
          }, {
            id: 4,
            name: 'Jhony11',
            roleIds: [1]
          }, {
            id: 2,
            name: 'Phil',
            roleIds: [2, 3]
          }, {
            id: 3,
            name: 'Tom',
            roleIds: [3]
          }
        ],
        roles: [
          {
            id: 1,
            name: '管理员',
            pageIds: [1, 2],
            directiveIds: [1, 2]
          }, {
            id: 2,
            name: '普通用户',
            pageIds: [1, 2],
            directiveIds: [1]
          }, {
            id: 3,
            name: '登录用户',
            pageIds: [1],
            directiveIds: []
          }
        ],
        pages: [
          {
            id: 1,
            name: '表格',
            path: '/tables'
          }, {
            id: 2,
            name: '图表',
            path: '/charts'
          }
        ],
        directive: [
          {
            id: 1,
            name: 'modify',
            pageId: 1
          }, {
            id: 2,
            name: 'delete',
            pageId: 1
          }
        ]
      }
    })
  }
}
