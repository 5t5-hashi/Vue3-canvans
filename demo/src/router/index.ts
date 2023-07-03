import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/move1",
        name: "canvansMove1",
        component: () => import("@/views/canvansMove1.vue"),
      },
      {
        path: "/three1",
        name: "three1",
        component: () => import("@/views/three1.vue"),
      },
      {
        path: "/three2",
        name: "three2",
        component: () => import("@/views/three2.vue"),
      },
      {
        path: "/scroll1",
        name: "scroll1",
        component: () => import("@/views/scroll1.vue"),
      },
      {
        path: "/move2",
        name: "move2",
        component: () => import("@/views/move2.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
