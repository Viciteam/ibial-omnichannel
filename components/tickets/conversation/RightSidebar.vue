<template>
  <v-layout column class="fill-height overflow-y-auto sidebar__width--max">
    <v-flex class="flex shrink py-2 bottom_border">
      <v-card-title class="body-2 font-weight-bold">
        <div class="body-2 d-flex justify-space-between">
          <span class="pl-3">Details</span>
        </div>
        <v-spacer />
        <div>
          <span class="medium--gray">Knowledgebase</span>
        </div>
      </v-card-title>
    </v-flex>
    <v-flex class="flex pa-3 overflow-auto">
      <v-card flat class="pa-6 body-2 border--shadow">
        <span class="font-weight-bold">
          Saas partnership talk with tech team from somewhere
        </span>
        <div class="mt-3">
          <div>
            <span class="font-weight-light">Ticket ID:</span>
            <span>#005</span>
          </div>
          <div class="pt-1">
            <span class="font-weight-light">Created:</span>
            <span>Oct. 1, 2020</span>
          </div>
          <div class="pt-1">
            <span class="font-weight-light">Due date:</span>
            <span class="primary--text font-weight-light">
              No date selected
            </span>
          </div>
          <div class="pt-1">
            <span class="font-weight-light">Tags:</span>
            <v-chip small class="ma-2 text-capitalize">
              Sample Tag
              <v-icon right x-small>mdi-close</v-icon>
            </v-chip>
            <v-btn text class="text-capitalize font-weight-light primary--text"
              >Add Tag</v-btn
            >
          </div>
        </div>
      </v-card>

      <v-card flat class="pa-6 mt-3 body-2 border--shadow">
        <span class="font-weight-bold">
          Ticket Status
        </span>
        <v-select hide-details dense outlined class="pt-2">
          <template v-slot:append>
            <v-icon>mdi-chevron-down</v-icon>
          </template>
        </v-select>
      </v-card>

      <v-card flat class="px-6 py-3 mt-3 body-2 border--shadow">
        <div class="d-flex justify-space-between">
          <span class="font-weight-bold pt-2">
            Description
          </span>
          <span>
            <v-btn text class="text-capitalize font-weight-light primary--text">
              Edit
            </v-btn>
          </span>
        </div>
        <span class="font-weight-light">
          Hellooooo add notes here if you want.
        </span>
      </v-card>

      <v-card flat class="px-6 py-3 mt-3 body-2 border--shadow">
        <div class="d-flex justify-space-between">
          <span class="font-weight-bold pt-2">
            Assignee
          </span>
          <span>
            <v-btn text class="text-capitalize font-weight-light primary--text">
              Change
            </v-btn>
          </span>
        </div>
        <div class="pt-2">
          <span class="font-weight-light">
            <v-avatar size="30" color="grey">
              M
            </v-avatar>
          </span>
          <span class="font-weight-light pl-2">Agent name</span>
        </div>
      </v-card>

      <v-card flat class="px-6 py-3 mt-3 body-2 border--shadow">
        <div class="d-flex justify-space-between">
          <span class="font-weight-bold pt-2">
            Requester
          </span>
          <span>
            <v-btn text class="text-capitalize font-weight-light primary--text">
              Change
            </v-btn>
          </span>
        </div>
        <div class="pt-2">
          <v-row>
            <v-col cols="2 py-0">
              <span class="font-weight-light mt-2">
                <v-avatar size="30" color="blue" class="mt-1">
                  R
                </v-avatar>
              </span>
            </v-col>
            <v-col class="py-0">
              <div>Ron Swanson</div>
              <span class="font-weight-light caption">
                ronswonson@gmail.com
              </span>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.border--shadow {
  border: 1px solid #dfdfe1;
  box-shadow: 1px 1px 2px rgba(189, 189, 189, 0.25);
}
.bottom_border {
  box-shadow: inset 0px -1px 0px #ebecef;
}
.sidebar__width--max {
  max-width: 25%;
}
.medium--gray {
  color: #a0a8b0;
}
</style>
