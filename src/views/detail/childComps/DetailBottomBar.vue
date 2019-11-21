<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>客服</div>
      <div>店铺</div>
      <div>收藏</div>
    </div>
    <div class="bar-right">
      <div class="add-to-car" @click="addToCart">加入购物车</div>
      <div class="pay">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  line-height: 49px;
  text-align: center;
}
.bar-left {
  display: flex;
  flex: 1;
  background-color: #f1eded;
}
.bar-left div {
  flex: 1;
}
.bar-right {
  display: flex;
  flex: 1;
  background-color: yellow;
}
.add-to-car {
  flex: 1;
}
.pay {
  flex: 1;
  background-color: var(--color-tint);
  color: #fff;
}
</style>