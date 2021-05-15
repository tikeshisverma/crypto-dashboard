import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    coinData: null,
    error: null,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setErrorStatus(state, error){
        state.error = error
    },
    setCoinData(state, data) {
      state.coinData = data;
    },
  },
});
export default store;
