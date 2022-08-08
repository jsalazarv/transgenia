import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import BusinessList from "@/views/Business/BusinessList.vue";
import BusinessShow from "@/views/Business/BusinessShow.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: BusinessList,
  },
  {
    path: "/bussiness_owner/:ownerId/business/:businessId",
    name: "show",
    component: BusinessShow,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
