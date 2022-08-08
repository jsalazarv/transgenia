<template>
  <div v-layout="'public-layout'">
    <v-row class="wrapper pt-16">
      <v-col cols="12" md="6">
        <v-container fluid class="pt-15 card-container px-0">
          <div class="horizontal-scroll">
            <div v-for="business in businessList" :key="business.id">
              <BusinessCard :data="business" @click="onClickBusinessCard" />
            </div>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import OwnerService from "@/services/OwnerService";
import IOwner from "@/entities/owner";
import IBusiness from "@/entities/business";
import BusinessCard from "@/components/BusinessCard.vue";
import { IBusinessQueryParams } from "@/services/OwnerService/types";

@Component({
  components: { BusinessCard },
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
    console.log("Selected Business");
  }

  mounted(): void {
    this.getOwners();
  }
}
</script>

<style lang="scss"></style>
