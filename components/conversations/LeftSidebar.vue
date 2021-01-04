<template>
  <v-layout
    column
    class="fill-height overflow-auto leftSidebar__width--max outline--right-default"
  >
    <v-flex class="flex shrink">
      <v-card-title class="body-2 font-weight-bold outline--bottom-default">
        <span>
          Live Chats
        </span>

        <v-spacer />

        <v-btn icon>
          <v-icon>mdi-filter-variant</v-icon>
        </v-btn>
      </v-card-title>
    </v-flex>

    <v-flex class="flex shrink">
      <v-card-title class="body-2 font-weight-medium outline--bottom-default">
        <v-menu offset-y nudge-width="75">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              Chat Name
              <v-icon>mdi-chevron-down</v-icon>
            </span>
          </template>
          <v-list>
            <v-list-item
              v-for="i in 3"
              :key="i"
              link
              class="font-weight-normal"
            >
              <v-list-item-title>Chat Widget {{ i }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
    </v-flex>

    <v-flex class="flex shrink">
      <v-card-title class="py-2 body-2 mt-2">
        <v-text-field
          height="40px"
          prepend-inner-icon="mdi-magnify"
          rounded
          flat
          solo
          hide-details
          placeholder="Search chats..."
          class="search-box__container pa-0 ma-0"
        ></v-text-field>
      </v-card-title>
    </v-flex>

    <v-flex class="flex shrink">
      <v-card-title class="caption ibial_darkgray--text text-uppercase">
        <span>
          My Chats
        </span>
      </v-card-title>

      <Chats />
    </v-flex>

    <v-flex class="flex shrink">
      <v-card-title class="caption ibial_darkgray--text text-uppercase">
        <span>
          Unassigned
        </span>
      </v-card-title>

      <Chats />
    </v-flex>

    <v-flex class="flex shrink">
      <v-card-title class="caption ibial_darkgray--text text-uppercase">
        <span>
          Assign to Others
        </span>
      </v-card-title>

      <Chats />
    </v-flex>
  </v-layout>
</template>

<script>
import { Chats } from './left-sidebar'

export default {
  components: {
    Chats
  }
}
</script>

<style scoped>
.leftSidebar__width--max {
  max-width: 23%;
}
#app .search-box__container {
  border: 1px solid #f2f2f2;
}
.outline--right-default {
  border-right: 1px solid #f2f2f2;
}
.outline--bottom-default {
  border-bottom: 1px solid #f2f2f2;
}
</style>

<style>
#app .search-box__container .v-input__control .v-input__slot {
  padding: 0 10px;
}
</style>
