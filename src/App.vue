<template>
  <div id="app">
  <Table :data="cryptoData"/>

  </div>
</template>

<script>
import Table from "./components/Table"

export default {
  name: "App",
  data(){
    return{
cryptoData:{}
    }
  },
  components: {
    Table
  },
  mounted(){
    this.getdata()
  },
  methods:{
getdata: function(){ fetch(' https://api.coinranking.com/v1/public/coins/?limit=100')
  .then(response => response.json())
  .then(response=>{this.cryptoData = response
  console.log(response)} );
  }}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

@media only screen and (max-width: 420px) {
  #app {
    font-size: 12px;
  }
}
</style>
