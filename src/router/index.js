import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index'

// 私有路由
const privateRoutes = [
  {
    path: '/user',
    component: layout,
    redirdect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        component: () =>
          import(
            /* webpackChunkName: "userMange" */ '@/views/user-manage/index'
          ),
        meta: {
          title: 'userMange',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'userRole',
        component: () =>
          import(/* webpackChunkName: "roleList" */ '@/views/role-list/index'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        component: () =>
          import(
            /* webpackChunkName: "permissionList" */ '@/views/permission-list/index'
          ),
        meta: {
          title: 'permissionList',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () =>
          import(/* webpackChunkName: "userInfo" */ '@/views/user-info/index'),
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () =>
          import(/* webpackChunkName: "import" */ '@/views/import/index'),
        meta: {
          title: 'excelImport'
        }
      }
    ]
  },
  {
    path: '/article',
    component: layout,
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        component: () =>
          import(
            /* webpackChunkName: "articleRanking" */ '@/views/article-ranking/index'
          ),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/:id',
        component: () =>
          import(
            /* webpackChunkName: "articleDetail" */ '@/views/article-detail/index'
          ),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        component: () =>
          import(
            /* webpackChunkName: "articleCreate" */ '@/views/article-create/index'
          ),
        meta: {
          title: 'articleCreate',
          icon: 'article-create'
        }
      },
      {
        path: '/article/editor/:id',
        component: () =>
          import(
            /* webpackChunkName: "articleEditor" */ '@/views/article-create/index'
          ),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]

// 公开路由
const publicRoutes = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index'),
    redirdect: '/profile',
    children: [
      // 个人中心
      {
        path: '/profile',
        name: 'profile',
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/views/profile/index'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      // 404
      {
        path: '/404',
        name: '404',
        component: () =>
          import(/* webpackChunkName: "404" */ '@/views/error-page/404')
      },
      // 401
      {
        path: '/401',
        name: '401',
        component: () =>
          import(/* webpackChunkName: "401" */ '@/views/error-page/401')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
