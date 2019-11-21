<template>
  <div class="cart-bottom-bar">
    <div class="check-all" @click="ckAll">
      <img src="~assets/images/cart/tick.svg" class="check-img" :class="{check:isItemAllCheck}" />
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>总计：￥{{totalPrice}}</span>
    </div>
    <div class="sell">
      <span>去结算({{checkCounts}})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CartBottomBar",
  data() {
    return {
      // isckeck: true
    };
  },
  components: {},
  computed: {
    ...mapGetters(["totalPrice", "checkCounts", "isItemAllCheck"])
  },
  methods: {
    ...mapMutations(["checkAll"]),
    ckAll() {
      // console.log("ok");
      this.checkAll();
    }
  }
};
</script>

<style scoped>
.cart-bottom-bar {
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  /* background-color: antiquewhite; */
  line-height: 49px;
  text-align: center;
  font-size: 13px;
}
.check-all {
  flex: 0 0 80px;
  background-color: antiquewhite;
}
.total-price {
  flex: 1;
  background-color: #f2f2f2;
}
.sell {
  flex: 0 0 80px;
  background-color: greenyellow;
}
.check-img {
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  border: 1px solid #ada8a8;
}
.check {
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>