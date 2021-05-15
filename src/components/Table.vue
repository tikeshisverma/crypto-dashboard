<template>
  <div class="table">
    <header>
      <h1>TITLE</h1>
      <select
        class="table-option"
        v-model.number="rowPerPage"
        name="row-count"
        @change="updateRowsPerPage"
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    </header>
    <Row
      v-for="item in this.$store.state.coinData.slice(start, end)"
      :key="item.id"
      :rowData="item"
    />
    <div class="button-wrepper">
      <button v-if="start > 0" class="previous" @click="previous10">
        <span class="previous-icon">&and; </span>
      </button>
      <div class="range">{{ start }} - {{ end }}</div>

      <button v-if="end < 100" class="next" @click="next10">
        <span class="next-icon">&and; </span>
      </button>
    </div>
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
      rowPerPage: 10,
    };
  },

  methods: {
    next10() {
      this.start += this.rowPerPage;
      this.end += this.rowPerPage;
    },
    previous10() {
      this.start -= this.rowPerPage;
      this.end -= this.rowPerPage;
    },
    updateRowsPerPage() {
      this.start = 0;
      this.end = this.start + this.rowPerPage;
    },
  },
};
</script>

<style scoped>
.table {
  margin: 2.5%;
  /* border: 5px solid #0000001a; */
  padding: 2.5%;
  border-radius: 2%;
  box-shadow: inset 8px 8px 16px 0 rgb(0 0 0 / 20%), inset -8px -8px 16px 0 rgb(255 255 255 / 40%);
}

.button-wrepper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
}
.button-wrepper button{
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  border-color: #0000001a;
  font-size: 1.5em;
  font-weight: bold;
  color:#0000005f ;
  outline: none;
}
.previous-icon {
  display: inline-block;
  transform: rotate(270deg);
}
.next-icon {
  display: inline-block;
  transform: rotate(90deg);
}
.range {
  margin-left: 10%;
  margin-right: 10%;
  font-weight: 500;
}
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table-option {
  width: 10%;
  min-width: 50px;
  max-width: 70px;
}

</style>
