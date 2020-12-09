<template>
  <v-app>
    <v-navigation-drawer clipped clipped-left mini-variant fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in drawerList"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left fixed app class="header-box-shadow white">
      logo
    </v-app-bar>

    <v-content fluid>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawerList: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ]
    }
  }
}
</script>
