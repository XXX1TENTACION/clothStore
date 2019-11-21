<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <div class="iconfont iconshouye item-icon" slot="item-icon"></div>
        <div class="item-text" slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <div class="iconfont iconleimupinleifenleileibie item-icon" slot="item-icon"></div>
        <div class="item-text" slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <div class="iconfont icongouwuchekong item-icon" slot="item-icon"></div>
        <div class="item-text" slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <div class="iconfont iconwode item-icon" slot="item-icon"></div>
        <div class="item-text" slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang='scss' scoped>
</style>