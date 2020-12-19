<template>
  <div>
    <v-row>
      <v-col class="bottom_border">
        <v-btn
          rounded
          outlined
          class="color_primary text-capitalize"
          @click="filterDialog = !filterDialog"
        >
          Add Filter
        </v-btn>
      </v-col>
    </v-row>
    <OpenTickets v-if="selectedRoute === 'Open'" />
    <AllTickets v-if="selectedRoute === 'All'" />
    <v-dialog v-model="filterDialog" width="400">
      <FilterDialog :category="selectedRoute" />
    </v-dialog>
  </div>
</template>

<script>
import { OpenTickets, AllTickets } from './categories'
import FilterDialog from '@/components/tickets/FilterDialog.vue'
export default {
  components: {
    FilterDialog,
    OpenTickets,
    AllTickets
  },
  props: {
    selected: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      filterDialog: false,
      newTicketDialog: false
    }
  },
  computed: {
    selectedRoute() {
      return this.selected
    }
  }
}
</script>

<style scoped>
.color_primary {
  color: #4db7a1 !important;
}
</style>
