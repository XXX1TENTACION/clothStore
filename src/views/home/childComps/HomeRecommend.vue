<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.$index">
      <a :href="item.link">
        <img :src="item.image" width="70" height="70" />
        <div class="recommend-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 25px 0;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-text {
  font-size: 14px;
  margin-top: 10px;
}
</style>