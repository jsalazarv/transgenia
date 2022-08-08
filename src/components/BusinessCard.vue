<template>
  <v-card class="mx-auto" max-width="344" @click="onClick">
    <v-img :src="data.photo" height="200px"></v-img>
    <v-card-title> {{ data.name }} </v-card-title>
    <v-card-text>
      <p>
        <v-icon class="mr-1" color="secondary">mdi-map-marker</v-icon>
        {{ data.address_street }}, {{ data.address_city }}
      </p>
      <p>
        <v-icon class="mr-1" color="secondary">mdi-phone</v-icon>
        {{ data.phone }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import IBusiness from "@/entities/business";

@Component({})
export default class BusinessCard extends Vue {
  @Prop({ type: Object, default: {} })
  data!: IBusiness;

  @Emit("click")
  onClick(): IBusiness {
    return this.data;
  }
}
</script>

<style scoped></style>
