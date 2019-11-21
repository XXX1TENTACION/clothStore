<template>
  <div class="detail-image">
    <div v-for="item in detailImage" :key="item.$index">
      <img :src="item" width="100%" @load="imageLoad" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImage",
  props: {
    detailImage: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      count: 0,
      imagesLength: 0
    };
  },
  methods: {
    imageLoad() {
      //只有最后一张图片加载完成之后才向外触发事件，只会触发一次
      if (++this.count === this.detailImage.length) {
        this.$emit("imageLoad");
      }
    }
  }
};
</script>

<style scoped>
</style>