import { createRouter, createWebHistory } from "vue-router";
import Error from "@/layouts/Error.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
      meta: {
        layout: Error,
      },
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: {
        reload: true,
        layout: "layout-default",
      },
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/Detail.vue"),
      meta: {
        reload: true,
        layout: "layout-default",
      },
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  // 	console.log(savedPosition);
  // 	if (savedPosition) {
  // 		return savedPosition;
  // 	} else {
  // 		return { x: 0, y: 0 };
  // 	}
  // },
});

export default router;
