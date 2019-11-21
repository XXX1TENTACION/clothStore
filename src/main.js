import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import "assets/css/base.css"; //基本样式文件
import "assets/css/iconfont.css"; //字体文件
import VueLazyload from "vue-lazyload";
import fastClick from "fastclick";
fastClick.attach(document.body);
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  loading: require("./assets/images/common/placeholder.png")
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
