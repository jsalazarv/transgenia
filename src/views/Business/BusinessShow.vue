<template>
  <div class="pt-16">
    <v-container class="pt-16">
      <BusinessDetailCard :business="business" :owner="owner" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OwnerService from "@/services/OwnerService";
import IBusiness from "@/entities/business";
import IOwner from "@/entities/owner";
import BusinessDetailCard from "@/components/BusinessDetailCard.vue";

@Component({
  components: { BusinessDetailCard },
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
