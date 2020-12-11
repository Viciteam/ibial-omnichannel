<template>
  <div>
    <TicketsData :selected="items" />
  </div>
</template>

<script>
import TicketsData from '@/components/tickets/TicketsData.vue'
export default {
  components: {
    TicketsData
  },
  props: {
    items: {
      type: String,
      default: null
    }
  }
}
</script>
