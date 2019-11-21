<template>
  <div class="toast" v-if="isToastShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: "默认文字"
    },
    isToastShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // message: "",
      // isToastShow: true
    };
  },
  methods: {
    // show(message = "默认文字", duration = 2000) {
    //   this.message = message;
    //   this.isToastShow = true;
    //   setTimeout(() => {
    //     console.log("ok");
    //     this.isToastShow = false;
    //   }, duration);
    // }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  z-index: 999;
  padding: 10px 15px;
  border-radius: 10px;
}
</style>