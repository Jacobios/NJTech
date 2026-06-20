import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: '南工大新生攻略' }
  },
  {
    path: '/prepare',
    name: 'Prepare',
    component: () => import('../views/Prepare.vue'),
    meta: { title: '入学准备清单' }
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/Report.vue'),
    meta: { title: '报到流程' }
  },
  {
    path: '/campus',
    name: 'Campus',
    component: () => import('../views/Campus.vue'),
    meta: { title: '校园生活' }
  },
  {
    path: '/study',
    name: 'Study',
    component: () => import('../views/Study.vue'),
    meta: { title: '学习攻略' }
  },
  {
    path: '/military',
    name: 'Military',
    component: () => import('../views/Military.vue'),
    meta: { title: '军训指南' }
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('../views/Food.vue'),
    meta: { title: '吃喝玩乐' }
  },
  {
    path: '/clubs',
    name: 'Clubs',
    component: () => import('../views/Clubs.vue'),
    meta: { title: '社团组织' }
  },
  {
    path: '/tips',
    name: 'Tips',
    component: () => import('../views/Tips.vue'),
    meta: { title: '学长忠告' }
  },
  {
    path: '/rights',
    name: 'Rights',
    component: () => import('../views/Rights.vue'),
    meta: { title: '校园权益' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title + ' | NJTech学长'
})

export default router
