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
    <div class="label-row-wrapper">
      <div class="icon">Logo</div>
      <div class="name">Name</div>
      <div class="symbol">Symbol</div>
      <div class="price">Price</div>
      <div class="price-change">Change</div>
    </div>
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
  box-shadow: inset 8px 8px 16px 0 rgb(0 0 0 / 20%),
    inset -8px -8px 16px 0 rgb(255 255 255 / 40%);
}

.button-wrepper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
}
.button-wrepper button {
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  border-color: #0000001a;
  font-size: 1.5em;
  font-weight: bold;
  color: #0000005f;
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
/* Column name row styles */
.label-row-wrapper {
  box-sizing: border-box;
  height: 66px;
  display: flex;
  padding: 1em 1.5em;
  text-align: center;
  align-items: center;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 10%),
    0 8px 16px -8px rgb(0 0 0 / 10%), 0 -6px 16px -6px rgb(0 0 0 / 1%);

  position: sticky;
  top: 0px;
  opacity: 100;
  background: #424242;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  text-align: start;
}
.price,
.symbol {
  width: 22%;
}
.name {
  width: 20%;
}
.icon,
.change {
  width: 18%;
}
.price-change {
  font-weight: 500;
}
.icon-img {
  width: 30%;
  padding-left: 15%;
  padding-top: 10%;
  padding-bottom: 10%;
}
</style>
