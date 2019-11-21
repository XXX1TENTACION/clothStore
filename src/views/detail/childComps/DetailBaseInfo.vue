<template>
  <div class="detail-base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <p class="title">{{ goodsInfo.title }}</p>
    <div class="price">
      <div class="nowPrice">{{ goodsInfo.newPrice }}</div>
      <div class="oldPrice" v-if="goodsInfo.oldPrice">
        {{ goodsInfo.oldPrice }}
      </div>
      <div class="discount" v-if="goodsInfo.discountDesc">
        {{ goodsInfo.discountDesc }}
      </div>
    </div>
    <div class="sell">
      <span class="sell-text">{{ goodsInfo.columns[0] }}</span>
      <span class="sell-text">{{ goodsInfo.columns[1] }}</span>
      <span class="sell-text">{{
        goodsInfo.services[goodsInfo.services.length - 1].name
      }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goodsInfo.services.length - 1"
        :key="index"
      >
        <img :src="goodsInfo.services[index - 1].icon" />
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
  // mounted() {
  //   console.log();
  // }
};
</script>

<style scoped>
.detail-base-info {
  padding: 3px;
}
.title {
  font-size: 15px;
}
.price {
  display: flex;
  margin: 5px 0;
}
.nowPrice {
  font-size: 16px;
  color: var(--color-tint);
  font-weight: 700;
}
.oldPrice {
  margin: 3px 8px 0 8px;
  text-decoration: line-through;
  font-size: 13px;
  color: grey;
}
.discount {
  padding: 4px;
  background-color: var(--color-tint);
  color: #ffffff;
  font-size: 13px;
  border-radius: 11px;
}
.sell {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 3px;
}
.sell-text {
  font-size: 13px;
  color: grey;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>
