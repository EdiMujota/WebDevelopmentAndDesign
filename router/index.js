import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/user/LoginView.vue";
import Register from "../views/user/RegisterView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/admin/Dashboard.vue"
      ),
  },

  {
    path: "/navbaradmin",
    name: "navbaradmin",
    component: () =>
      import(
        /* webpackChunkName: "navbaradmin" */ "../views/admin/NavbarAdmin.vue"
      ),
  },
  {
    path: "/slideshowadmin",
    name: "slideshowadmin",
    component: () =>
      import(
        /* webpackChunkName: "slideshowadmin" */ "../views/admin/SlideshowAdmin.vue"
      ),
  },
  {
    path: "/contactus",
    name: "contactus",
    component: () =>
      import(/* webpackChunkName: "contactus" */ "../views/Contactus.vue"),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () =>
      import(/* webpackChunkName: "aboutus" */ "../views/Aboutus.vue"),
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/faqview",
    name: "faqview",
    component: () =>
      import(/* webpackChunkName: "faqview" */ "../views/FaqView.vue"),
  },
  {
    path: "/createcomputer",
    name: "createcomputer",
    component: () =>
      import(
        /* webpackChunkName: "createcomputer" */ "../views/computerProduct/CreateComputer.vue"
      ),
  },
  {
    path: "/listcomputer",
    name: "listcomputer",
    component: () =>
      import(
        /* webpackChunkName: "listcomputer" */ "../views/computerProduct/ListComputer.vue"
      ),
  },
  {
    path: "/editcomputer/:id",
    name: "editcomputer",
    component: () =>
      import(
        /* webpackChunkName: "editcomputer" */ "../views/computerProduct/EditComputer.vue"
      ),
  },
  {
    path: "/createlaptop",
    name: "createlaptop",
    component: () =>
      import(
        /* webpackChunkName: "createlaptop" */ "../views/laptopProduct/CreateLaptop.vue"
      ),
  },
  {
    path: "/listlaptop",
    name: "listlaptop",
    component: () =>
      import(
        /* webpackChunkName: "listlaptop" */ "../views/laptopProduct/ListLaptop.vue"
      ),
  },
  {
    path: "/editlaptop/:id",
    name: "editlaptop",
    component: () =>
      import(
        /* webpackChunkName: "editlaptop" */ "../views/laptopProduct/EditLaptop.vue"
      ),
  },
  {
    path: "/createphone",
    name: "createphone",
    component: () =>
      import(
        /* webpackChunkName: "createphone" */ "../views/phoneProduct/CreatePhone.vue"
      ),
  },
  {
    path: "/listphone",
    name: "listphone",
    component: () =>
      import(
        /* webpackChunkName: "listlphone" */ "../views/phoneProduct/ListPhone.vue"
      ),
  },
  {
    path: "/editphone/:id",
    name: "editphone",
    component: () =>
      import(
        /* webpackChunkName: "editphone" */ "../views/phoneProduct/EditPhone.vue"
      ),
  },
  {
    path: "/createtv",
    name: "createtv",
    component: () =>
      import(
        /* webpackChunkName: "createtv" */ "../views/tvProduct/CreateTv.vue"
      ),
  },
  {
    path: "/listtv",
    name: "listtv",
    component: () =>
      import(/* webpackChunkName: "listltv" */ "../views/tvProduct/ListTv.vue"),
  },
  {
    path: "/edittv/:id",
    name: "edittv",
    component: () =>
      import(/* webpackChunkName: "edittv" */ "../views/tvProduct/EditTv.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
