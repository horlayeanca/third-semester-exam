import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RepoDetails from "../components/RepoDetails.vue";
import Error404 from "../views/Error404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/repodetails",
    name: "repodetails",
    component: RepoDetails,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error404",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
