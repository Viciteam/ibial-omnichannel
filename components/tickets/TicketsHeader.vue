<template>
  <div>
    <v-row class="bottom_border">
      <v-col cols="3" class="d-flex justify-space-between mr-0 px-6 pt-3">
        <span class="font-weight-bold body-2 pt-3">Tickets</span>
        <span class="py-0">
          <v-btn
            rounded
            class="color_primary white--text text-capitalize"
            @click="newTicketDialog = !newTicketDialog"
          >
            <v-icon left>mdi-plus</v-icon>
            New
          </v-btn>
        </span>
      </v-col>
      <v-col cols="9" class="left_border">
        <v-text-field
          class="px-0 body-2"
          flat
          solo
          dense
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search tickets"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-dialog v-model="newTicketDialog" width="600">
      <NewTicketDialog />
    </v-dialog>
  </div>
</template>

<script>
import NewTicketDialog from '@/components/tickets/NewTicketDialog.vue'
export default {
  components: {
    NewTicketDialog
  },
  data() {
    return {
      newTicketDialog: false
    }
  }
}
</script>

<style scoped>
.color_primary {
  background: #4db7a1 !important;
}
.bottom_border {
  box-shadow: inset 0px -1px 0px #ebecef;
}
.left_border {
  border-left: 1px solid #ebecef;
}
</style>
