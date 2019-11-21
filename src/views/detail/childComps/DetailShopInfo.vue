<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shopInfo.shopLogo" class="shop-img" />
      <span class="shop-name">{{shopInfo.name}}</span>
    </div>
    <div class="shop-data">
      <div class="shop-sell">
        <div class="shop-sells">
          <P class="shop-numbers">{{shopInfo.cSells}}</P>
          <p class="shop-text">总销量</p>
        </div>
        <div class="shop-counts">
          <P class="shop-numbers">{{shopInfo.cGoods}}</P>
          <p class="shop-text">全部宝贝</p>
        </div>
      </div>
      <div class="shop-score">
        <div class="score-item" v-for="item in shopInfo.score" :key="item.$index">
          <span class="score-title">{{item.name}}</span>
          <span
            class="score-number"
            :class="{better:item.isBetter,worse:!item.isBetter}"
          >{{item.score}}</span>
          <span v-if="item.isBetter" class="score-better">高</span>
          <span v-if="!item.isBetter" class="score-worse">低</span>
        </div>
      </div>
    </div>
    <div class="button">
      <span class="btn-text">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.shop-info {
  padding: 8px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
.shop-img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid grey;
  vertical-align: middle;
}
.shop-name {
  margin-left: 10px;
}
.shop-data {
  display: flex;
  padding: 20px 0;
}
.shop-sell {
  display: flex;
  flex: 1;
  justify-content: center;
}
.shop-sells {
  text-align: center;
  flex: 1;
}
.shop-counts {
  text-align: center;
  flex: 1;
  border-right: 1px solid rgb(230, 224, 224);
}
.shop-numbers {
  margin: 5px 0;
}
.shop-score {
  flex: 1;
  margin-left: 10px;
  font-size: 13px;
}
.score-item {
  margin-bottom: 5px;
}
.score-title {
  margin-right: 8px;
}
.better {
  color: red;
}
.worse {
  color: green;
}
.score-better {
  background-color: red;
  color: white;
  margin-left: 8px;
}
.score-worse {
  background-color: green;
  color: white;
  margin-left: 8px;
}
.button {
  margin: 10px 0;
  text-align: center;
}
.btn-text {
  padding: 10px 15px;
  background-color: rgb(230, 224, 224);
  border-radius: 15px;
}
</style>