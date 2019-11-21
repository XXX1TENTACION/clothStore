<template>
  <div class="comments" v-if="commentsInfo.length">
    <div class="comments-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comments-info" v-for="item in commentsInfo" :key="item.$index">
      <div class="comments-avarta">
        <img :src="item.user.avatar" class="comments-img" />
        <span>{{ item.user.uname }}</span>
      </div>
      <div>
        <p class="comments-content">{{ item.content }}</p>
        <p>
          <span>{{ item.style }}</span>
          <span>{{ item.created | dataFormat }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils.js";
export default {
  name: "DetailCommentsInfo",
  props: {
    commentsInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  filters: {
    dataFormat(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.comments {
  padding: 20px 10px;
  font-size: 13px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}
.comments-title {
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
}
.comments-img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.comments-avarta {
  margin: 10px 0;
}
.comments-content {
  margin: 10px 0;
}
</style>
