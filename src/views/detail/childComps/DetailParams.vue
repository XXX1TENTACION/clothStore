<template>
  <div class="detail-params">
    <table class="size">
      <tr v-for="item in itemParams.rule" :key="item.$inde">
        <td v-for="each in item" :key="each.$index">{{ each }}</td>
      </tr>
    </table>

    <table class="params">
      <tr v-for="item in itemParams.set" :key="item.$index">
        <td>{{ item.key }}:</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.size {
  font-size: 12px;
  text-align: center;
}
.params {
  font-size: 8px;
}
</style>
