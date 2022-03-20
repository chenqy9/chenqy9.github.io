import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SdCba',
    component: () => import(/* webpackChunkName: "SdCba" */ '@/views/sd-cba.vue'),
  },
  {
    path: '/question',
    name: 'SdQuestion',
    component: () => import(/* webpackChunkName: "SdAnswer" */ '@/views/sd-question.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
