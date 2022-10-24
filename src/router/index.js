import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: () => import('@/views/Recruit.vue'),
    //   } ,
    //   {
    //     path : '/stay' ,
    //     name : 'Stay' ,
    //     component : ( )  =>  import ( '@/views/Stay.vue' ) ,
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