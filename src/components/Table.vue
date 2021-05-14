<template>
  <div class="table">
    <Row  v-for="item in data.data.coins" :key="item.id" :rowData="item"/>

  </div>
</template>

<script>
import Row from "./Row";

export default {
  name: "Table",
  components: {
    Row,
  },
  props: {data:Object},
};
</script>

<style scoped>
</style>
