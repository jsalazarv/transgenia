import Vue from "vue";
import Vuex from "vuex";
import app from "./app";
import VuexPersistence from "vuex-persist";
import { IRootState } from "@/store/types";

Vue.use(Vuex);

const vuexPersist = new VuexPersistence({
  key: "vuex",
  storage: window.localStorage,
  reducer: (state: IRootState) => ({
    app: state.app,
  }),
});

export default new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    app,
  },
  plugins: [vuexPersist.plugin],
});
