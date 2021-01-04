<template>
  <div>
    <v-row>
      <v-col class="py-0">
        <v-row>
          <v-col class="py-0">
            <TicketsHeader />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="py-0">
            <TicketsDrawer :data="tickets" @itemSelected="items" />
          </v-col>
          <v-col cols="9" class="left_border py-0">
            <TicketsContent :data="tickets" :items="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  TicketsDrawer,
  TicketsContent,
  TicketsHeader
} from '@/components/tickets'

export default {
  components: {
    TicketsDrawer,
    TicketsContent,
    TicketsHeader
  },
  data() {
    return {
      item: null,
      tickets: []
    }
  },
  mounted() {
    this.getTickets()
  },
  methods: {
    items(value) {
      this.item = value
    },
    async getTickets() {
      try {
        await this.$ticketsRepository
          .getTickets()
          //.AllContacts()
          .then((response) => {
            //console.log(response.emails)
            this.tickets = response.emails
          })
        // eslint-disable-next-line no-empty
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.left_border {
  border-left: 1px solid #ebecef;
}
</style>
