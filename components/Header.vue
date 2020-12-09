<template>
  <v-app-bar
    clipped-left
    fixed
    app
    class="header-box-shadow white pa-0 pr-5 header__container"
    height="60"
  >
    <v-img
      src="/logo/ibial-logo.svg"
      alt="ibial logo"
      max-width="max-content"
    ></v-img>

    <v-spacer />

    <v-btn icon class="mr-2">
      <v-img
        src="/icon/global/notification.svg"
        alt="notification"
        max-width="max-content"
      ></v-img>
    </v-btn>

    <div>
      <v-avatar class="header__avatar--border">
        <v-img
          src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
          alt="profile picture"
          max-width="100%"
          max-height="100%"
        ></v-img>
      </v-avatar>

      <span class="font-weight-bold ibial_darkgray--text ml-3">Gadot</span>
    </div>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style>
#app .header__container .v-toolbar__content {
  padding: 0;
}
#app .header__avatar--border {
  border: 1px solid #d1d1d1;
  padding: 2px;
}
</style>
