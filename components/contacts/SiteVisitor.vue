<template>
  <div>
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      placeholder="Search..."
      class="my-2"
      hide-details
      solo
      flat
    ></v-text-field>

    <v-divider></v-divider>

    <v-card flat class="mt-3">
      <v-data-table
        :headers="headers"
        :items="visitors"
        :items-per-page="5"
        class="contacts__data--table"
      >
        <template v-slot:[`header.name`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.country`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.on_site`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.last_page_visited`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.in_chat`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>

        <template v-slot:[`item.name`]="{ item }">
          <v-avatar
            size="32"
            color="primary"
            class="white--text subtitle-2 text-center mr-1"
          >
            {{ item.name.substring(0, 1) }}
          </v-avatar>
          <span class="font-weight-bold">
            {{ item.name }}
          </span>
        </template>

        <template v-slot:[`item.in_chat`]="{ item }">
          <v-btn
            v-if="item.in_chat === ''"
            rounded
            outlined
            color="primary"
            class="text-capitalize"
          >
            Start Chat
          </v-btn>

          <div v-else>
            <v-avatar
              size="32"
              color="primary"
              class="white--text subtitle-2 text-center mr-1"
            >
              {{ item.in_chat.substring(0, 1) }}
            </v-avatar>
            {{ item.in_chat }}
          </div>
        </template>

        <template v-slot:[`item.action`]>
          <v-menu offset-y left min-width="200px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item link>
                <v-list-item-title class="error--text">
                  Ban this Visitor
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Country', value: 'country' },
      { text: 'On Site', value: 'on_site' },
      { text: 'Last Page Visited', value: 'last_page_visited' },
      { text: 'In Chat', value: 'in_chat' },
      { text: '', value: 'action' }
    ],
    visitors: [
      {
        name: 'Visitor 012345',
        country: 'Warsaw, Poland',
        on_site: '3 min',
        last_page_visited: 'Community',
        in_chat: ''
      },
      {
        name: 'Visitor 678910',
        country: 'Hanoi, Vietnam',
        on_site: '3 min',
        last_page_visited: 'iBial Pricing',
        in_chat: 'Leslie'
      },
      {
        name: 'Visitor 231451',
        country: 'Cebu City, Philippines',
        on_site: '3 min',
        last_page_visited: 'iBial Features',
        in_chat: ''
      }
    ]
  })
}
</script>

<style>
.contacts__data--table table tbody tr {
  height: 60px;
}
</style>
