<template>
  <div class="table">
    <Row
      v-for="item in data.data.coins.slice(start, end)"
      :key="item.id"
      :rowData="item"
    />
    <div class="range">{{start}} - {{end}}</div>
    <div class="button-wrepper">
      <button v-if="start > 0" class="previous" @click="previous10">
        PREVIOUS
      </button>
      <button v-if="end < 100" class="next" @click="next10">NEXT</button>
    </div>

    <select v-model.number="rowPerPage" name="row-count" @change="updateRowsPerPage">
      <option>10</option>
      <option>25</option>
      <option>50</option>
      <option>100</option>
    </select>
  </div>
</template>

<script>
import Row from "./Row";

export default {
  name: "Table",
  components: {
    Row,
  },
  data() {
    return {
      start: 0,
      end: 10,
      rowPerPage:10
    };
  },

  props: { data: Object },
  methods: {
    next10() {
      this.start += this.rowPerPage;
      this.end +=this.rowPerPage;
    },
    previous10() {
      this.start -= this.rowPerPage;
      this.end -= this.rowPerPage;
    },
    updateRowsPerPage(){
      this.start = 0;
      this.end = this.start + this.rowPerPage
    }
  },
};
</script>

<style scoped>
</style>
