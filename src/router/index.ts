import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import BusinessList from "@/views/Business/BusinessList.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: BusinessList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
