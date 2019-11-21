<template>
  <div class="cart-item">
    <scroll class="scroll">
      <div class="item" v-for="item in cartList" :key="item.$index">
        <div class="check" :class="{checked:item.isChecked}" @click="checkClick(item)">
          <img src="~assets/images/cart/tick.svg" width="100%" class="check-img" />
        </div>
        <div class="img">
          <img :src="item.image" width="100%" />
        </div>
        <div class="info">
          <p class="text">{{ item.title }}</p>
          <p class="text">{{ item.desc }}</p>
          <div class="detail">
            <span class="text-color">￥{{ item.price }}</span>
            <span>X{{ item.count }}</span>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "CartItem",
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      // isChecked: true
    };
  },
  components: { Scroll },
  methods: {
    checkClick(item) {
      item.isChecked = !item.isChecked;
    }
  }
};
</script>

<style scoped>
.cart-item {
  padding: 5px;
}
.item {
  display: flex;
  padding: 8px;
  border-bottom: 1px solid #e0dcdc;
  align-items: center;
}
.check {
  flex: 0 0 15px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ada8a8;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.img {
  flex: 0 0 30px;
}
.info {
  flex: 1;
  width: 100%;
}
.detail {
  display: flex;
  justify-content: space-between;
}
.text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 300px;
  font-size: 13px;
}
/* .check-img {
  background-color: var(--color-tint);
} */
.scroll {
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.text-color {
  color: var(--color-tint);
}
.checked {
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>
