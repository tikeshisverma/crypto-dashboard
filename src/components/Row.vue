<template>
  <div class="row-wrapper">
    <div class="icon">
      <img class="icon-img" :src="rowData.iconUrl" />
    </div>
    <div class="name">{{ rowData.name }}</div>
    <div class="symbol">{{ rowData.symbol }}</div>
    <div class="price">${{ rowData.price | formatPrice }}</div>
    <div :class="[isProfit ? 'profit' : 'loss', 'price-change']">
      {{ rowData.change > 0 ? "&#8593;" : "&#8595;" }} {{ rowData.change }}%
    </div>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    rowData: Object,
  },
  data() {
    return {};
  },
  computed: {
    isProfit: function () {
      return this.rowData.change > 0;
    },
  },
  filters: {
    formatPrice: function (value) {
      return Number.parseFloat(value).toFixed(4);
    },
  },
};
</script>

<style scoped>
.row-wrapper {
  height: 66px;
  display: flex;
  align-items: center;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 10%),
    0 8px 16px -8px rgb(0 0 0 / 10%), 0 -6px 16px -6px rgb(0 0 0 / 1%);
}
.row-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 30px 60px -12px rgb(50 50 93 / 10%),
    0 18px 36px -18px rgb(0 0 0 / 10%), 0 -12px 36px -8px rgb(0 0 0 / 1%);
}
.icon,
.name,
.symbol,
.price,
.price-change {
  flex: 1;
}
.price-change {
  font-weight: 500;
}
.profit {
  color: green;
}
.loss {
  color: red;
}
.icon-img {
  width: 30%;
  max-width: 30px;
  padding-left: 15%;
  padding-top: 10%;
  padding-bottom: 10%;
}
</style>
