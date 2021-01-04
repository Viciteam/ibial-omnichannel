<template>
  <v-container fluid class="pa-0">
    <v-tabs v-model="contact" color="primary" height="60" class="px-4">
      <v-tab v-for="item in contactsTabs" :key="item" class="text-capitalize">
        {{ item }}
      </v-tab>

      <v-spacer />

      <v-btn
        icon
        outlined
        class="outline---default-color align-self-center align-content-center mr-2"
      >
        <v-icon color="ibial_darkgray" size="20">mdi-cog-outline</v-icon>
      </v-btn>

      <v-btn
        class="align-self-center align-content-center text-capitalize"
        color="primary"
        rounded
        depressed
        height="40"
      >
        <v-icon>mdi-plus</v-icon>
        <span>New Contact</span>
      </v-btn>
    </v-tabs>

    <v-divider></v-divider>

    <v-tabs-items v-model="contact">
      <v-tab-item key="0" transition="fade" reverse-transition="fade">
        <AllContacts />
      </v-tab-item>
      <v-tab-item key="1" transition="fade" reverse-transition="fade">
        <SiteVisitor />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { AllContacts, SiteVisitor } from '~/components/contacts'

export default {
  components: {
    AllContacts,
    SiteVisitor
  },
  data: () => ({
    contact: 0,
    contactsTabs: ['All Contacts (20)', 'Site Visitors (13)']
  })
}
</script>

<style scoped>
.outline---default-color {
  border: 1px solid #f2f2f2;
}
</style>
