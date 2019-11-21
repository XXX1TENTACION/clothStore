import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("views/home/Home")
    },
    {
      path: "/category",
      name: "Category",
      component: () => import("views/category/Category")
    },
    {
      path: "/cart",
      name: "ShopCart",
      component: () => import("views/cart/ShopCart")
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("views/profile/Profile")
    },
    {
      path: "/detail/:iid",
      name: "Detail",
      component: () => import("views/detail/Detail")
    }
  ],
  mode: "history"
});
