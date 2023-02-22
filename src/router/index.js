import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: () => import('@/views/Recruit.vue'),
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('@/views/Support.vue'),
  },
  {
    path: '/period',
    children: [
      {
        path: '',
        component: () => import('@/views/Period.vue'),
      },
      {
        path: 'info',
        component: () => import('@/views/UserInfo.vue'),
      }
    ]
  },
  // {
  //   path: '/period',
  //   name: 'Period',
  //   component: () => import('@/views/Period.vue'),
  //   // children: [
  //   //   {
  //   //     path: 'info',
  //   //     component: () => import('@/views/UserInfo.vue'),
  //   //   }
  //   // ]
  // },
  {
    path: '/backstage',
    name: 'Backstage',
    component: () => import('@/views/Backstage.vue'),
    children: [
      {
        path: 'recruit',
        component: () => import('@/views/Back/Recruit.vue'),
        beforeEnter: (to, from) => {
          const token = localStorage.getItem('token');
          // 登入頁不需驗證
          if (to.fullPath === '/login') return;
          if (!token) {
            return '/login';
          }
          return true;
        }
      },
      {
        path: 'user',
        component: () => import('@/views/Back/User.vue'),
        beforeEnter: (to, from) => {
          const token = localStorage.getItem('token');
          // 登入頁不需驗證
          if (to.fullPath === '/login') return;
          if (!token) {
            return '/login';
          }
          return true;
        }
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 跳轉後滾動至頂部
    return { top: 0 }
  },
});
export default router;