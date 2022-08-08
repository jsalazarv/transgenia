<template>
  <div>
    <Navbar :menu-items="menuItems" />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/layouts/partials/Navbar.vue";

@Component({
  components: { Navbar },
})
export default class PublicLayout extends Vue {
  public menuItems = [
    { title: "Home", path: "/", icon: "" },
    { title: "Listings", path: "/", icon: "" },
    { title: "Blog", path: "/", icon: "" },
    { title: "Pages", path: "/", icon: "" },
    { title: "Features", path: "/", icon: "" },
    { title: "Contact", path: "/", icon: "" },
  ];
}
</script>

<style scoped></style>
