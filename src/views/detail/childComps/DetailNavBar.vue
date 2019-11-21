<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backclick">
        <img src="~assets/images/common/back.svg" />
      </div>
      <div slot="center" class="titles">
        <div
          v-for="(item,index) in titles"
          :key="item.$index"
          class="titles-item"
          :class="{active: currentIndex === index}"
          @click="itemClick(index)"
        >
          <div>{{item}}</div>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: { NavBar },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backclick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.titles {
  display: flex;
}
.titles-item {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 13px;
}
</style>