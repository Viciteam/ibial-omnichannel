<template>
  <v-container fluid class="fill-height pa-0">
    <LeftSidebar />

    <CenterSection />

    <v-layout column class="fill-height rightSidebar__width--max">
      <v-flex class="white--text flex overflow-auto">
        <v-card v-for="i in 12" :key="i" flat>
          <v-card-text>
            I should occupy rest of the available space
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex class="white--text blue flex shrink darken-3">
        <v-card-text>
          Footer
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { LeftSidebar, CenterSection } from '~/components/conversations'

export default {
  layout: 'conversation',
  components: {
    LeftSidebar,
    CenterSection
  }
}
</script>

<style scoped>
.rightSidebar__width--max {
  max-width: 23%;
}
</style>
