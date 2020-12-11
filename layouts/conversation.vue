<template>
  <v-app id="app" class="app__container">
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

<style>
#app.app__container .v-application--wrap {
  max-height: 100vh;
}
#app.app__container .v-content__wrap {
  max-height: calc(100vh - 60px);
}
</style>
