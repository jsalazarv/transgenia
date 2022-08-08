<template>
  <div>
    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppLayout extends Vue {}
</script>
