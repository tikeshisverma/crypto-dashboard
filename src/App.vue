<template>
  <div id="app">
    <Table/>
  </div>
</template>

<script>
import Table from "./components/Table";

export default {
  name: "App",
  components: {
    Table,
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata: function () {
      fetch(" https://api.coinranking.com/v1/public/coins/?limit=100")
        .then((response) => response.json())
        .then((response) => {
          const {
            data: { coins }, 
            status
          } = response;
          if (status === 'success') {
          this.$store.commit("setCoinData", coins);
          } else {
            this.$store.commit('setErrorStatus',{message: 'API Error has occured! Please try again.'})
          }
        });
    },
  },
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
