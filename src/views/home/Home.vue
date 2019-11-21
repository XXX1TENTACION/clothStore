<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物城</div>
    </nav-bar>
    <bar-control
      :cate="['流行','新款','精选']"
      @controlBarClick="childFn"
      ref="barControl1"
      v-show="isTabFixed"
      class="bar-control"
    />
    <scroll
      class="wrapper1"
      ref="scroll"
      :probeType="3"
      @backToTop="toTop"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <swiper :banners="banners" @bannerImgLoad="bannerImgLoad" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <bar-control :cate="['流行','新款','精选']" @controlBarClick="childFn" ref="barControl2" />
      <goods-wrapper :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import GoodsWrapper from "components/content/GoodsWrapper";
import Scroll from "components/common/scroll/Scroll";

import HomeRecommend from "views/home/childComps/HomeRecommend";
import HomeFeature from "views/home/childComps/HomeFeature";
import BarControl from "views/home/childComps/BarControl";

import { getHomeMultidata, getHomeGoods } from "network/home";

import { itemListernerMinin, backTop } from "@/common/minins.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      currentOffset: 0,
      isTabFixed: false,
      imgLoadFn: null
    };
  },
  mixins: [itemListernerMinin, backTop],
  components: {
    NavBar,
    Swiper,
    HomeRecommend,
    HomeFeature,
    BarControl,
    GoodsWrapper,
    Scroll
  },
  mounted() {
    //请求首页轮播图数据
    this.getHomeMultidata();
    //请求首页商品数据
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  methods: {
    /*
     * 网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++;
        //结束上拉加载更多，否则只能加载一次
        this.$refs.scroll.finishPullUp();
      });
    },
    /*
     * 业务逻辑相关
     */
    childFn(index) {
      // this.goodsItemData = this.goods[index].list;
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      //点击tab-bar组建的选项是，同步更新两个tab-bar组件中的currentIndex
      this.$refs.barControl1.currentIndex = this.$refs.barControl2.currentIndex = index;
    },
    //实现返回顶部按钮的显示和隐藏，better-scroll滚动的监听
    toTop(position) {
      //计算返回顶部按钮是否该显示
      this.isBackTopShow = -position.y > 1000;
      //计算tab-bar组件是否显示
      this.isTabFixed = -position.y > this.currentOffset;
    },
    loadMore() {
      this.getGoods(this.currentType);
    },

    bannerImgLoad() {
      //当轮播图组件中的图片加载完成的时候，计算tab-bar组件距离顶部的位置
      this.currentOffset = this.$refs.barControl2.$el.offsetTop;
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  deactivated() {
    this.$bus.$off("loadFinish", this.imgLoadFn);
  }
};
</script>

<style  scoped>
.nav-bar {
  z-index: 9;
  background-color: var(--color-tint);
  color: white;
}
.wrapper1 {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.bar-control {
  position: relative;
  z-index: 9;
}
</style>