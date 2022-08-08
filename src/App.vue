<template>
  <v-app id="app">
    <component :is="layout"></component>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppLayout from "@/components/layouts/AppLayout.vue";
import PublicLayout from "@/components/layouts/PublicLayout.vue";

@Component({
  components: {
    PublicLayout,
    AppLayout,
  },
})
export default class App extends Vue {
  get layout(): string {
    return this.$store.state.app.layout;
  }
}
</script>
