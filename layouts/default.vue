<template>
  <v-app id="app">
    <!-- Global Header -->
    <Header />
    <!-- Global Drawer -->
    <Drawer />

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { Header, Drawer } from '~/components'

export default {
  components: {
    Header,
    Drawer
  }
}
</script>
