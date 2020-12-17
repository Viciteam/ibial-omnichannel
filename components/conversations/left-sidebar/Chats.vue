<template>
  <v-card flat class="pb-4" link>
    <v-card-title>
      <v-badge
        offset-y="39"
        offset-x="27"
        color="primary"
        bordered
        icon="mdi-message"
      >
        <v-avatar size="32" class="avatar--background-null mr-3">
          <v-icon color="white">mdi-account</v-icon>
        </v-avatar>
      </v-badge>

      <span class="body-2 font-weight-bold text-uppercase">
        Visitor Name
      </span>

      <v-spacer />

      <span class="caption ibial_darkgray--text">3 mins</span>
    </v-card-title>

    <span class="caption font-weight-light px-4 d-block ibial_darkgray--text">
      Lorem ipsum dolor sit amet, te sit viderer assueverit referrentur. Ea...
    </span>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped>
#app .avatar--background-null {
  background-color: #b6b6b6;
}
</style>
