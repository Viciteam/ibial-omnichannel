<template>
  <v-navigation-drawer
    class="drawer__container--mini-variant"
    clipped
    clipped-left
    mini-variant
    mini-variant-width="70"
    permanent
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in drawerList"
        :key="i"
        :to="item.to"
        router
        exact
        class="py-1"
      >
        <v-list-item-action>
          <v-img
            :src="activeRoute === item.to ? item.activeSrc : item.src"
          ></v-img>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawerList: [
      {
        src: '/icon/global/conversations.svg',
        activeSrc: '/icon/global/conversations-active.svg',
        title: 'Conversations',
        to: '/conversations'
      },
      {
        src: '/icon/global/customers.svg',
        activeSrc: '/icon/global/customers-active.svg',
        title: 'Contacts',
        to: '/contacts'
      },
      {
        src: '/icon/global/tickets.svg',
        activeSrc: '/icon/global/tickets-active.svg',
        title: 'Tickets',
        to: '/tickets'
      },
      {
        src: '/icon/global/clock.svg',
        activeSrc: '/icon/global/clock-active.svg',
        title: 'Archive',
        to: '/archive'
      },
      {
        src: '/icon/global/users.svg',
        activeSrc: '/icon/global/users-active.svg',
        title: 'Agents',
        to: '/agents'
      },
      {
        src: '/icon/global/activity.svg',
        activeSrc: '/icon/global/activity-active.svg',
        title: 'Reports',
        to: '/reports'
      },
      {
        src: '/icon/global/book.svg',
        activeSrc: '/icon/global/book-active.svg',
        title: 'Knoledgebase',
        to: '/knowledgebase'
      },
      {
        src: '/icon/global/settings.svg',
        activeSrc: '/icon/global/settings-active.svg',
        title: 'Settings',
        to: '/settings'
      }
    ]
  }),
  computed: {
    activeRoute() {
      return this.$route.path
    }
  }
}
</script>

<style>
#app .drawer__container--mini-variant {
  background: #f8f8f8 !important;
  border: none;
}
#app .drawer__container--mini-variant .v-navigation-drawer__border {
  display: none;
}
</style>
