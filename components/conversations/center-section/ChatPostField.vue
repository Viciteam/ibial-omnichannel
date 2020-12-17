<template>
  <v-card flat class="px-4 pb-3">
    <v-textarea
      placeholder="Type your reply here..."
      solo
      flat
      class="chatPostField__container mb-3"
      auto-grow
      rows="1"
      hide-details
    ></v-textarea>

    <v-row no-gutters align="center">
      <div>
        <v-btn icon class="mr-1">
          <v-icon>mdi-attachment mdi-rotate-315</v-icon>
        </v-btn>
        <v-btn icon class="mr-1">
          <v-icon>mdi-emoticon-happy-outline</v-icon>
        </v-btn>
        <v-btn icon class="mr-1">
          <v-icon>mdi-message-plus-outline</v-icon>
        </v-btn>
        <v-btn icon class="mr-1">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>

        <v-divider class="d-inline mx-4" vertical />

        <v-btn text class="mr-1">
          <v-icon color="ibial_darkgray">mdi-chat-processing-outline</v-icon>
          <span class="text-capitalize ml-1">Discuss</span>
        </v-btn>
      </div>

      <v-spacer />

      <v-btn
        color="primary"
        class="text-capitalize px-5"
        height="40"
        rounded
        depressed
      >
        Send
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped>
.outline---default-color {
  border: 1px solid #f2f2f2;
}
</style>

<style>
.chatPostField__container .v-text-field__slot {
  max-height: 200px;
  overflow-y: auto;
}
.chatPostField__container .v-input__slot {
  padding: 0 0 !important;
  background: transparent;
}
.chatPostField__container .v-input__control {
  background: transparent;
}
</style>
