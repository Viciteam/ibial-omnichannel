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
        hide-default-footer
      >
        <template v-slot:[`header.status`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.name`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.role`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>

        <template slot="body.prepend">
          <tr class="cursor--pointer">
            <th class="text-center">
              <v-btn icon class="primary white--text">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </th>
            <th class="primary--text">New Agent</th>
            <th></th>
          </tr>
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <v-badge
            v-if="item.status === 'online' || item.status === 'away'"
            dot
            bordered
            offset-y="43"
            offset-x="17"
            :color="
              item.status === 'online' ? 'success darken-2' : 'ibial_darkgray'
            "
          >
            <v-avatar
              size="44"
              color="primary"
              class="white--text subtitle-1 text-center mr-1"
            >
              {{ item.name.substring(0, 1) }}
            </v-avatar>
          </v-badge>

          <span v-else class="text-uppercase ibial_darkgray--text">
            Pending
          </span>
        </template>

        <template v-slot:[`item.name`]="{ item }">
          <div class="font-weight-bold">
            {{ item.name }}
          </div>
          <div class="font-weight-light">
            {{ item.email }}
          </div>
        </template>

        <template v-slot:[`item.role`]="{ item }">
          <v-chip
            :color="
              item.role === 'owner'
                ? 'secondary'
                : item.role === 'admin'
                ? 'primary'
                : 'gray'
            "
            class="font-weight-bold text-uppercase"
          >
            {{ item.role }}
          </v-chip>
        </template>
      </v-data-table>

      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'Status',
        align: 'center',
        sortable: false,
        value: 'status',
        width: '150px'
      },
      { text: 'Name', value: 'name' },
      { text: 'Role', align: 'center', value: 'role' }
    ],
    contacts: [
      {
        status: 'online',
        name: 'Edward Elric',
        email: 'edwardelric@gmail.com',
        role: 'owner'
      },
      {
        status: 'online',
        name: 'Alphonse Elric',
        email: 'al@elric.com',
        role: 'admin'
      },
      {
        status: 'away',
        name: 'William Shakespeare',
        email: 'email@gmail.com',
        role: 'agent'
      },
      {
        status: 'pending',
        name: 'William Shakespeare',
        email: 'email@gmail.com',
        role: 'agent'
      }
    ]
  }),
  methods: {
    createAgent() {}
  }
}
</script>

<style>
.contacts__data--table table tbody tr {
  height: 65px;
}
.cursor--pointer {
  cursor: pointer;
}
</style>
