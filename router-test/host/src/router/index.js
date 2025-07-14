import * as bridge from "@module-federation/bridge-vue3";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const Remote2 = bridge.createRemoteComponent({
  loader: () => import("remote/counter"),
  rootAttrs: { class: "root-element-class" },
});
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "roote",
      component: HomeView,
    },
    {
      path: "/remote/:pathMatch(.*)*",
      component: Remote2,
      props: { foo: "bar" },
    },
  ],
});

export default router;
