<template>
  <div id="app">
    <section
      class="loader"
      v-if="!this.$store.state.coinData && !this.$store.state.error"
    >
      <Loader />
    </section>
    <section class="error" v-if="this.$store.state.error">
      {{ this.$store.state.error.message }}
    </section>
    <section v-if="this.$store.state.coinData">
      <Table />
    </section>
  </div>
</template>

<script>
import Table from "./components/Table";
import Loader from "./components/Loader";
export default {
  name: "App",
  components: {
    Table,
    Loader,
  },
  data() {
    return {
      apiTimer: null,
    };
  },
  mounted() {
    if (!this.apiTimer) this.apiTimer = setInterval(this.getdata, 5000);
  },
  destroyed() {
    clearInterval(this.apiTimer);
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
          this.$store.commit("setErrorStatus", {
            message: "API Error has occured! Please try again.",
          });
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

.error {
  text-align: center;
  color: red;
}
@media only screen and (max-width: 420px) {
  #app {
    font-size: 12px;
    position: relative;
  }
}
</style>
