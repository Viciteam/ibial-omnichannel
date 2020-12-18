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
        :items="teams"
        :items-per-page="5"
        class="contacts__data--table"
      >
        <template v-slot:[`header.status`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.name`]="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:[`header.members`]="{ header }">
          {{ header.text.toUpperCase() }}
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
            {{ item.active_user }} Active Users
          </div>
        </template>

        <template v-slot:[`item.members`]="{ item }">
          <template v-for="(member, i) in item.members">
            <v-badge
              :key="i"
              dot
              bordered
              offset-y="43"
              offset-x="17"
              class="mr-n3"
              :color="member.status === 'online' ? 'success darken-2' : 'error'"
            >
              <v-avatar
                size="44"
                color="ibial_lightgray"
                class="white--text subtitle-1 text-center mr-1"
              >
                <v-img
                  :src="member.avatar"
                  class="ma-1"
                  width="90%"
                  height="90%"
                ></v-img>
              </v-avatar>
            </v-badge>
          </template>
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
        text: 'Status',
        align: 'center',
        sortable: false,
        value: 'status',
        width: '150px'
      },
      { text: 'Name', value: 'name' },
      { text: 'Members', value: 'members' }
    ],
    teams: [
      {
        status: 'online',
        name: 'Sales (2)',
        active_user: 1,
        members: [
          {
            status: 'online',
            avatar:
              'https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg'
          },
          {
            status: 'online',
            avatar:
              'https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg'
          },
          {
            status: 'offline',
            avatar:
              'https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg'
          }
        ]
      },
      {
        status: 'online',
        name: 'General (3)',
        active_user: 3,
        members: [
          {
            status: 'online',
            avatar:
              'https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg'
          },
          {
            status: 'offline',
            avatar:
              'https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg'
          },
          {
            status: 'online',
            avatar:
              'https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg'
          }
        ]
      }
    ]
  })
}
</script>

<style>
.contacts__data--table table tbody tr {
  height: 65px;
}
</style>
