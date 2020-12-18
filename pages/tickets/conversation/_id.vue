<template>
  <v-container fluid class="fill-height pa-0">
    <BodyContent />
    <RightSidebar />
  </v-container>
</template>

<script>
import { BodyContent, RightSidebar } from '@/components/tickets/conversation'
export default {
  layout: 'conversation',
  components: {
    BodyContent,
    RightSidebar
  }
}
</script>
