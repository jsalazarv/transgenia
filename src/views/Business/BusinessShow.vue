<template>
  <div class="pt-16">
    <v-container class="pt-16">
      <BusinessDetailCard :business="business" :owner="owner" />
      <div class="map-wrapper mt-4" style="width: 100%; height: 45vh">
        <div class="mb-4">
          <h4 class="text-uppercase">Location</h4>
          <h5>
            <v-icon>mdi-map-marker</v-icon>
            {{ business.address_city }}
          </h5>
        </div>
        <Map :businesses="[business]" :zoom="3" :is-clickable="false" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OwnerService from "@/services/OwnerService";
import IBusiness from "@/entities/business";
import IOwner from "@/entities/owner";
import BusinessDetailCard from "@/components/BusinessDetailCard.vue";
import Map from "@/components/Map.vue";

@Component({
  components: { Map, BusinessDetailCard },
})
export default class BusinessShow extends Vue {
  protected ownerService = new OwnerService();
  public owner: IOwner | unknown = {};
  public business: IBusiness | unknown = {};

  async getOwner(): Promise<void> {
    this.owner = await this.ownerService.getOwner(this.$route.params.ownerId);
  }

  async getBusiness(): Promise<void> {
    this.business = await this.ownerService.getOwnerBusiness(
      this.$route.params.ownerId,
      this.$route.params.businessId
    );
  }

  mounted(): void {
    this.getOwner();
    this.getBusiness();
  }
}
</script>

<style scoped></style>
