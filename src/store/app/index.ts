import { IAppState } from "@/store/app/types";
import { Module } from "vuex";
import { IRootState } from "@/store/types";

const initialState: IAppState = {
  layout: "public-layout",
};

const appStore: Module<IAppState, IRootState> = {
  namespaced: true,
  state: {
    ...initialState,
  },
  mutations: {
    SET_LAYOUT(state, layout: string) {
      state.layout = layout;
    },
  },
};

export default appStore;
