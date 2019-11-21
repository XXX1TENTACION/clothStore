<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar v-if="isShow" />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar";
export default {
  name: "app",
  components: { MainTabBar },
  computed: {
    isShow() {
      return (
        this.$route.path === "/home" ||
        this.$route.path === "/category" ||
        this.$route.path === "/cart" ||
        this.$route.path === "/profile"
      );
    }
  }
};
</script>

<style>
</style>
