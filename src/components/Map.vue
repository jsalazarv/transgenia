<template>
  <GmapMap :center="coordinates" :zoom="zoom" style="width: 100%; height: 100%">
    <GmapMarker
      :key="index"
      v-for="(business, index) in businesses"
      :position="{
        lat: Number(business.address_latitude),
        lng: Number(business.address_longitude),
      }"
      :clickable="isClickable"
      :draggable="isDraggable"
    />
  </GmapMap>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";
import IBusiness from "@/entities/business";

@Component({})
export default class Map extends Vue {
  @Prop({ type: Boolean, default: true })
  isClickable?: boolean;

  @Prop({ type: Boolean, default: false })
  isDraggable?: boolean;

  @Prop({ type: Number, default: 2 })
  zoom?: number;

  @Prop({ type: Array, default: () => [] })
  businesses?: Array<IBusiness>;

  public coordinates = { lat: 0, lng: 0 };

  getCurrentCoordinates(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      console.log("Your browser does not support geolocation API");
    }
  }

  mounted(): void {
    this.getCurrentCoordinates();
  }
}
</script>

<style scoped></style>
