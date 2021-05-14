<template>
  <div class="row-wrapper">
    <div class="icon">
      <img class="icon-img" :src= "rowData.iconUrl"/>
    </div>
    <div class="name">{{ rowData.name }}</div>
    <div class="symbol">{{ rowData.symbol }}</div>
    <div class="price">{{ rowData.price }}</div>
    <div class="price-change">{{ rowData.change }}</div>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    rowData: Object,
  },
  data(){
    return{

    }
  },
};
</script>

<style scoped>
.row-wrapper{
  display: flex;
align-items: center;
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 10%), 0 8px 16px -8px rgb(0 0 0 / 10%), 0 -6px 16px -6px rgb(0 0 0 / 1%);
}
.icon, .name, .symbol,.price, .price-change{
    flex: 1;
}
.icon-img{
  width: 50%;
}

</style>
