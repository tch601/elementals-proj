import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLocation: {id: "not set yet", name: "not set yet"},
  },
  mutations: {
    CHANGE_CURRENT_LOCATION(state, payload) {
      state.currentLocation = payload;
    },
  },
  actions: {
    changeCurrentLocation({ commit }, location) {
      commit("CHANGE_CURRENT_LOCATION", location);
    },
  },
});
