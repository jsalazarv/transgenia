<template>
  <div>
    <v-card class="mx-auto" elevation="0">
      <v-list-item three-line>
        <v-list-item-avatar rounded size="400" color="grey">
          <v-img :src="business.photo" alt="Business" />
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="text-overline mb-4">{{ business.kind_of_bussiness }}</div>
          <v-list-item-title class="text-h5 font-weight-bold">
            {{ business.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ business.bs_phrase }}
          </v-list-item-subtitle>
          <div class="d-flex">
            <p class="mr-4">
              <strong>Opening time: </strong>
              {{ business.opening_time }}
            </p>
            <p>
              <strong>Closing time: </strong>
              {{ business.opening_time }}
            </p>
          </div>
          <div>
            <v-icon class="mr-2">mdi-web</v-icon>
            <strong>
              <a class="text-decoration-none" :href="business.website">{{
                business.website
              }}</a>
            </strong>
          </div>
          <div>
            <v-icon v-if="business.home_delievery">mdi-moped</v-icon>
            <v-icon class="mx-2" v-if="business.accept_cards">
              mdi-credit-card
            </v-icon>
            <v-icon v-if="business.pet_friendly">mdi-paw</v-icon>
          </div>
          <div>
            <div class="text-overline">Contact</div>

            <v-card max-width="344" elevation="0">
              <v-list-item three-line class="pa-0">
                <v-list-item-avatar size="40" color="grey"></v-list-item-avatar>
                <v-list-item-content>
                  <div class="text-overline mb-4">{{ owner.name }}</div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <small>
                  <strong>Phone: </strong>
                  {{ business.phone }}
                </small>
                <small>
                  <strong>Mail: </strong>
                  {{ business.email }}
                </small>
              </v-card-actions>
            </v-card>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IOwner from "@/entities/owner";
import IBusiness from "@/entities/business";

@Component({})
export default class BusinessDetailCard extends Vue {
  @Prop({ type: Object, default: {} })
  business!: IBusiness;

  @Prop({ type: Object, default: {} })
  owner!: IOwner;
}
</script>

<style scoped></style>
