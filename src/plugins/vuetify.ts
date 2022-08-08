import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2A2E3C",
        secondary: "#3EAAFD",
      },
    },
  },
});
