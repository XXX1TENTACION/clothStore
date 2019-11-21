<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartListLength }})</div>
    </nav-bar>
    <cart-item :cartList="cartList" />
    <cart-bottom-bar @click.native="sellClick" />
    <toast :message="message" :isToastShow="isToastShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Toast from "components/common/toast/Toast";

import CartItem from "./childComps/CartItem";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters, mapState } from "vuex";
export default {
  name: "ShopCart",
  data() {
    return {
      isToastShow: false,
      message: ""
    };
  },
  components: { NavBar, CartItem, CartBottomBar, Toast },
  computed: {
    ...mapGetters(["cartListLength", "checkCounts"]),
    ...mapState(["cartList"])
  },
  methods: {
    sellClick() {
      if (!this.checkCounts) {
        console.log("ok");
        this.message = "商品不能为空";
        this.isToastShow = true;
        setTimeout(() => {
          this.isToastShow = false;
          this.message = "";
        }, 2000);
      }
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
