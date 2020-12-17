<template>
  <v-container fluid class="fill-height pa-0">
    <LeftSidebar />

    <CenterSection />

    <RightSidebar />
  </v-container>
</template>

<script>
import {
  LeftSidebar,
  CenterSection,
  RightSidebar
} from '~/components/conversations'

export default {
  layout: 'conversation',
  components: {
    LeftSidebar,
    CenterSection,
    RightSidebar
  }
}
</script>
