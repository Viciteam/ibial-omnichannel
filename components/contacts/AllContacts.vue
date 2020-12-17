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
        :items="contacts"
        :items-per-page="5"
        class="contacts__data--table"
      >
        <template v-slot:[`header.name`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.email`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.phone`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.location`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.date_added`]="{ header }">
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

        <template v-slot:[`item.send_email`]>
          <v-btn rounded outlined color="primary" class="text-capitalize">
            Send Email
          </v-btn>
        </template>

        <template v-slot:[`item.action`]>
          <v-menu offset-y left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item link>
                <v-list-item-title>Edit Contact</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title>Delete Contact</v-list-item-title>
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
      { text: 'Email', value: 'email' },
      { text: 'Phone', value: 'phone' },
      { text: 'Location', value: 'location' },
      { text: 'Date Added', value: 'date_added' },
      { text: '', value: 'send_email' },
      { text: '', value: 'action' }
    ],
    contacts: [
      {
        name: 'Edward Elric',
        email: 'edwardelric@gmail.com',
        phone: '(123) 456-7890',
        location: 'New Delhi, India',
        date_added: 'Nov 01, 2020'
      },
      {
        name: 'Alphonse Elric',
        email: 'al@elric.com',
        phone: '--',
        location: 'Makati, Philippines',
        date_added: 'Nov 05, 2020'
      },
      {
        name: 'William Shakespeare',
        email: 'email@gmail.com',
        phone: '(123) 456-7890',
        location: 'New Delhi, India',
        date_added: 'Nov 01, 2020'
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
