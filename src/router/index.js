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
    path: '/backstage',
    name: 'Backstage',
    component: () => import('@/views/Backstage.vue'),
    children: [
      {
        path: 'recruit',
        component: () => import('@/views/Back/Recruit.vue'),
      },
      {
        path: 'user',
        component: () => import('@/views/Back/User.vue'),
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
});
export default router;