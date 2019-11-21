import { debounce } from "@/common/utils.js";
export const itemListernerMinin = {
  mounted() {
    //监听图片加载完成的时候刷新页面
    const refresh = debounce(this.$refs.scroll.refresh, 80);
    this.imgLoadFn = () => {
      refresh();
    };
    this.$bus.$on("loadFinish", this.imgLoadFn);
    // console.log("mixins");
  }
};

import BackTop from "components/content/BackTop";

export const backTop = {
  data() {
    return {
      isBackTopShow: false
    };
  },
  components: { BackTop },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
};
