<template>
  <v-layout column class="fill-height rightSidebar__width--max">
    <v-flex class="flex shrink">
      <v-card-title class="body-2 font-weight-bold outline--bottom-default">
        <span>
          Preview
        </span>
      </v-card-title>
    </v-flex>
    <v-btn icon absolute right bottom>
      <v-img src="logo/bubble_logo.png" width="50" />
    </v-btn>
  </v-layout>
</template>

<style scoped>
.rightSidebar__width--max {
  max-width: 23%;
}
.outline---default-color {
  border: 1px solid #f2f2f2;
}
.outline--bottom-default {
  border-bottom: 1px solid #f2f2f2;
}
</style>
