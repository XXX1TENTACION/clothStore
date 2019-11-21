<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in banners" :key="item.$index">
        <a :href="item.link">
          <img :src="item.image" width="100%" @load="imageLoad" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    imageLoad() {
      if (!this.flag) {
        this.$emit("bannerImgLoad");
        this.flag = true;
      }
    }
  }
};
</script>

<style scoped>
.swiper >>> .swiper-pagination-bullet-active {
  background-color: var(--color-high-text);
}
.swiper {
  font-size: 0;
}
</style>