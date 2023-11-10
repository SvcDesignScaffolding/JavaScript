import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () => import("./components/HelloWorld"),
  },
];

const router = new Router({
  routes,
});

export default router;
