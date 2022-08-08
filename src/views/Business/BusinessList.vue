<template>
  <div v-layout="'public-layout'">
    <v-row class="wrapper pt-16">
      <v-col cols="12" md="6">
        <div class="mt-16">
          <v-btn color="primary">Filter</v-btn>
        </div>
        <div>
          <h1>Food & Drink</h1>
        </div>
        <v-container fluid class="pt-15 card-container px-0">
          <div class="horizontal-scroll">
            <div v-for="business in businessList" :key="business.id">
              <BusinessCard :data="business" @click="onClickBusinessCard" />
            </div>
          </div>
        </v-container>
      </v-col>
      <v-col cols="12" md="6">
        <div class="map-container">
          <div class="map-wrapper" style="width: 50vw; height: 100vh">
            <Map :businesses="businessList" :zoom="3" :is-clickable="false" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import OwnerService from "@/services/OwnerService";
import BusinessCard from "@/components/BusinessCard.vue";
import IOwner from "@/entities/owner";
import IBusiness from "@/entities/business";
import { IBusinessQueryParams } from "@/services/OwnerService/types";
import Map from "@/components/Map.vue";

@Component({
  components: { Map, BusinessCard },
})
export default class BusinessList extends Vue {
  protected ownerService = new OwnerService();
  public owners: Array<IOwner> = [];
  public businessList: Array<IBusiness> = [];
  public filters: IBusinessQueryParams = {};

  async getOwners(): Promise<void> {
    this.owners = await this.ownerService.all();
  }

  async getBusinessList(): Promise<void> {
    let promises: Array<Promise<Array<IBusiness>>> = this.owners.map(
      async (owner): Promise<Array<IBusiness>> => {
        const businessList: Array<IBusiness> =
          await this.ownerService.getOwnerBusinesses(owner.id, this.filters);

        return businessList;
      }
    );

    const result: Array<Array<IBusiness>> = await Promise.all(promises);
    this.businessList = result.flat();
  }

  @Watch("owners")
  onChangeOwners(): void {
    this.getBusinessList();
  }

  onClickBusinessCard(business: IBusiness): void {
    this.$router.push({
      name: "show",
      params: { ownerId: business.bussiness_ownerId, businessId: business.id },
    });
  }

  mounted(): void {
    this.getOwners();
  }
}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  .card-container {
    flex: 1 1;
    .horizontal-scroll {
      display: flex;
      gap: 20px;
      height: 25rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .map-container {
    flex: 0 0;
    height: 50vh;
    .map-wrapper {
      position: fixed;
      top: 0;
      right: 0;
    }
  }
}
</style>
