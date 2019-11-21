<template>
  <div class="detail">
    <detail-nav-bar class="detail-navbar" @titleClick="titleClick" ref="nav" />
    <scroll class="detail-scroll" ref="scroll" @backToTop="backToTop" :probeType="3">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goodsInfo="goodsInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-image @imageLoad="imageLoad" :detailImage="detailImage" />
      <detail-params :itemParams="itemParams" ref="params" />
      <detail-comments-info :commentsInfo="commentsInfo" ref="comments" />
      <goods-wrapper :goods="goods" ref="recommends" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isBackTopShow" />
    <detail-bottom-bar @addToCart="addToCart" @click.native="toastClick" />
    <toast :message="'添加购物车成功'" :isToastShow="isToastShow" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailImage from "./childComps/DetailImage";
import DetailParams from "./childComps/DetailParams";
import DetailCommentsInfo from "./childComps/DetailCommentsInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import GoodsWrapper from "components/content/GoodsWrapper";
import Scroll from "components/common/scroll/Scroll";
import Toast from "components/common/toast/Toast";

import { itemListernerMinin, backTop } from "@/common/minins.js";
import {
  getDetail,
  goodsInfo,
  shopInfo,
  itemParams,
  getRecommendGoods
} from "network/detail.js";

import { mapMutations, mapState } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailImage: [],
      itemParams: {},
      commentsInfo: [],
      goods: [],
      imgLoadFn: null,
      navBarTop: [],
      currentIndex: 0,
      message: "",
      isToastShow: false
    };
  },
  mixins: [itemListernerMinin, backTop],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailImage,
    DetailParams,
    DetailCommentsInfo,
    GoodsWrapper,
    DetailBottomBar,
    Toast
  },
  computed: {
    ...mapState(["cartList"])
  },
  mounted() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      this.goodsInfo = new goodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shopInfo = new shopInfo(data.shopInfo);
      this.detailImage = data.detailInfo.detailImage[0].list;
      this.itemParams = new itemParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      this.commentsInfo = data.rate.list;
    });
    getRecommendGoods().then(res => {
      this.goods = res.data.data.list;
      // console.log(res);
    });
  },
  methods: {
    ...mapMutations(["addCart"]),
    imageLoad() {
      this.$refs.scroll.refresh();
      this.navBarTop.push(0);
      this.navBarTop.push(this.$refs.params.$el.offsetTop);
      this.navBarTop.push(this.$refs.comments.$el.offsetTop);
      this.navBarTop.push(this.$refs.recommends.$el.offsetTop);
      // console.log(this.navBarTop);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.navBarTop[index], 200);
    },
    backToTop(position) {
      let positionY = -position.y;
      /*[0, 15658, 16039, 16223]
      * 0-15658 index = 0;
       15658-16039 index = 1
       16039-16223 index = 2
       >16223 index = 3
      */
      let length = this.navBarTop.length;
      // console.log(length);
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.navBarTop[i] &&
            positionY < this.navBarTop[i + 1]) ||
            (i === length - 1 && positionY >= this.navBarTop[i]))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      //计算返回顶部按钮是否该显示
      this.isBackTopShow = -position.y > 1000;
    },
    addToCart() {
      // console.log("add");
      //创建购物车中需要展示的信息对象
      const obj = {
        image: this.topImages[0],
        title: this.goodsInfo.title,
        desc: this.goodsInfo.desc,
        price: this.goodsInfo.lowNowPrice,
        iid: this.iid,
        isChecked: true,
        count: 1
      };
      //将对象添加到vuex中
      this.addCart(obj);
      // console.log(this.addCart(obj));
    },
    toastClick(message = "默认文字", duration = 2000) {
      // this.$toast.methods.show("添加商品成功");
      this.message = message;
      this.isToastShow = true;
      setTimeout(() => {
        this.isToastShow = false;
        this.message = "";
      }, duration);
    }
  },
  destroyed() {
    this.$bus.$off("loadFinish", this.imgLoadFn);
  }
};
</script>

<style scoped>
.detail-navbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-scroll {
  /* position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0; */
  height: 574px;
}
</style>
