<template>
  <div>
    <pre>
      {{ owners }}
    </pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OwnerService from "@/services/OwnerService";
import IOwner from "@/entities/owner";

@Component({})
export default class HomeView extends Vue {
  protected ownerService = new OwnerService();
  public owners: Array<IOwner> = [];

  async getOwners(): Promise<void> {
    this.owners = await this.ownerService.all();
  }

  mounted(): void {
    this.getOwners();
  }
}
</script>
