import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../components/Layout/index.vue'
import store from '../store/index'
import { parseQueryStr } from '../utils/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    redirect: '/upload/index',
    children: [
      {
        path: 'index',
        name: 'UploadIndex',
        component: () => import(/* webpackChunkName: "about" */ '../views/Upload.vue')
      },
      {
        path: 'list',
        name: 'FileList',
        component: () => import(/* webpackChunkName: "about" */ '../views/FileList.vue')
      }
    ]
  },
  {
    path: '/message',
    name: 'Message',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    redirect: '/message/list',
    children: [
      {
        path: 'list',
        name: 'MessageList',
        component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
      }
    ]
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import(/* webpackChunkName: "about" */ '../views/Preview.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const whiteList = ['Login', 'Signup']
  if (whiteList.indexOf(to.name) < 0) {
    if (store.state.userinfo) { // logined
      next()
    } else {
      let cookies = parseQueryStr(document.cookie)
      if (cookies['USER_SID']) { // has cookie
        store.dispatch('getUserinfo')
          .then(res => {
            if (res.errcode === 0) {
              next()
            }
          })
      } else {
        next({name: 'Login', replace: true})
      }
    }
  } else {
    next()
  }
  
})

export default router
