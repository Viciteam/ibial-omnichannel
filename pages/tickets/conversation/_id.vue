<template>
  <div>
    <v-row class="bottom_border px-6">
      <v-col class="d-flex justify-space-between">
        <div class="pt-2 body-2">
          <span class="font-weight-bold primary--text">My Tickets</span>
          <span>
            <v-icon>mdi-chevron-right</v-icon>
          </span>
          <span>{{ details.subject }}</span>
          <span class="medium--gray">{{ details.tag }}</span>
        </div>
        <div>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="3" class="left_border">
        <div class="pt-2 body-2 d-flex justify-space-between">
          <span class="pl-3">Details</span>
          <span class="medium--gray">Knowledgebase</span>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-6">
      <v-col>
        <div class="px-3">
          <BodyContent />
        </div>
      </v-col>
      <v-col cols="3" class="left_border">
        <div class="px-3">
          <RightSidebar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { BodyContent, RightSidebar } from '@/components/tickets/conversation'
export default {
  components: {
    BodyContent,
    RightSidebar
  },
  computed: {
    details() {
      return this.$route.query.item
    }
  }
}
</script>

<style scoped>
.medium--gray {
  color: #a0a8b0;
}
.bottom_border {
  box-shadow: inset 0px -1px 0px #ebecef;
}
.left_border {
  border-left: 1px solid #ebecef;
}
</style>
