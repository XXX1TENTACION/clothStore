<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="imageShow" width="100%" @load="imagesLoad" />
    <div>
      <p class="item-text">{{ goods.title }}</p>
      <div class="text">
        <span class="item-price">￥{{ goods.price }}</span>
        <span>收藏数：{{ goods.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    //每张图片加载完成之后都会出发这个函数
    imagesLoad() {
      //向Home.vue组件触发一个事件
      this.$bus.$emit("loadFinish");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goods.iid);
    }
  },
  computed: {
    imageShow() {
      return this.goods.image || this.goods.show.img;
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  /* overflow: hidden; */
  font-size: 12px;
}
.goods-item img {
  border-radius: 3px;
}
.item-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 5px 0;
}
.item-price {
  color: var(--color-tint);
  margin-right: 15px;
}
.text {
  margin-bottom: 5px;
}
</style>
