<template>
  <div>
    <TicketsData :data="data" :selected="items" />
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
    },
    data: {
      type: Array,
      default: null
    }
  }
}
</script>
