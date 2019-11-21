<template>
  <div class="detail-swiper">
    <swiper :banners="bannerImage"></swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: { Swiper },
  computed: {
    bannerImage() {
      let bannerImage = [];
      this.topImages.forEach(item => {
        bannerImage.push({ image: item });
      });
      return bannerImage;
    }
  }
};
</script>

<style scoped>
.detail-swiper >>> .swiper-pagination {
  bottom: 280px;
}
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>