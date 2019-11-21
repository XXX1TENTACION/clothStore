<template>
  <div class="goods-wrapper">
    <goods-item v-for="item in goods" :key="item.$index" :goods="item" />
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "GoodsWrapper",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: { GoodsItem }
};
</script>

<style scoped>
.goods-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>