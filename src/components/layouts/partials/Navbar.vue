<template>
  <div>
    <v-app-bar class="px-md-15" color="primary" height="90" dark fixed app>
      <v-toolbar-title>
        <img src="@/assets/logo.svg" alt="logo" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(item, index) in menuItems"
          :item="item"
          :index="index"
          :key="item.index"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            class="hidden-md-and-up"
            color="white"
            v-bind="attrs"
            v-on="on"
            >mdi-menu</v-icon
          >
        </template>
        <v-list class="pa-5">
          <v-list-item-title v-for="(item, index) in menuItems" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item-title>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Navbar extends Vue {
  @Prop({ type: Boolean, default: false })
  sidebar?: boolean;

  @Prop({ type: String, default: "Logo" })
  appTitle?: string;

  @Prop({ type: Array, default: () => [] })
  menuItems?: boolean;
}
</script>

<style scoped></style>
