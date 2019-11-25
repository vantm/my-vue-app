import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About")
    },
    {
      path: "/course",
      name: "course",
      component: () => import("./views/Course")
    },
    {
      path: "/student",
      name: "student",
      component: () => import("./views/Student")
    },
    {
      path: "/class/add",
      name: "add-class",
      component: () => import("./views/Class/Add")
    },
    {
      path: "/class/edit/:id",
      name: "edit-class",
      component: () => import("./views/Class/Edit")
    },
    {
      path: "/class",
      name: "class",
      component: () => import("./views/Class/Index")
    }
  ]
});
