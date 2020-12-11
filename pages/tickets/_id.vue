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
            <TicketsDrawer @itemSelected="items" />
          </v-col>
          <v-col cols="9" class="left_border py-0">
            <TicketsContent :items="item" />
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
      item: null
    }
  },
  methods: {
    items(value) {
      this.item = value
      console.log('items ->' + value)
    }
  }
}
</script>

<style scoped>
.left_border {
  border-left: 1px solid #ebecef;
}
</style>
