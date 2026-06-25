import { createRouter, createWebHistory } from 'vue-router';
 
const routes = [
  {
    path: '/',
    name: 'hom',
	component:()=>import('../view/hom/index.vue')
  },
  {
    path: '/my',
    name: 'my',
  	component:()=>import('../view/my/index.vue'),
	// meta: { requiresAuth: true } // 需要登录权限的路由配置此属性
  },
  {
    path: '/login',
    name: 'login',
  	component:()=>import('../view/login/index.vue')
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})







// 路由前置
const isAuthenticated = () => {
  // 这里修改存储名
  const userInfo = localStorage.getItem('userInfo')
  if(!userInfo) return false
  else return true
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated() == false) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})
 
export default router;