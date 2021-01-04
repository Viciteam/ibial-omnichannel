<template>
  <v-container fluid class="pa-0 fill-height">
    <v-layout
      column
      class="fill-height center__default--width-max d-block outline--right-default"
    >
      <v-tabs v-model="contact" color="primary" height="60" class="px-4">
        <v-tab v-for="item in contactsTabs" :key="item" class="text-capitalize">
          {{ item }}
        </v-tab>

        <v-spacer />

        <v-menu offset-y left min-width="200">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="align-self-center align-content-center text-capitalize px-10"
              color="primary"
              rounded
              outlined
              depressed
              height="40"
              v-bind="attrs"
              v-on="on"
            >
              <span>New</span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item link>
              <v-icon class="mr-2">mdi-account-outline</v-icon>

              <v-list-item-title>New Agent</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-icon class="mr-2">mdi-account-group-outline</v-icon>

              <v-list-item-title>New Team</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>

      <v-divider></v-divider>

      <v-tabs-items v-model="contact">
        <v-tab-item key="0" transition="fade" reverse-transition="fade">
          <AllAgents />
        </v-tab-item>
        <v-tab-item key="1" transition="fade" reverse-transition="fade">
          <AllTeams />
        </v-tab-item>
      </v-tabs-items>
    </v-layout>

    <v-layout
      v-if="contact === 0"
      column
      class="fill-height right__default--width-max d-block"
    >
      <v-card-title class="font-weight-bold subtitle-1 py-3 px-4">
        <span>Agent details</span>

        <v-spacer />

        <v-btn icon color="primary">
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider />

      <v-list-item class="my-5">
        <v-badge bordered offset-y="60" offset-x="17" color="grey" class="mr-3">
          <v-avatar size="60">
            <v-img
              src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
            ></v-img>
          </v-avatar>
        </v-badge>

        <div class="font-weight-bold ibial_darkgray--text d-block">
          Angela
          <br />

          <span class="grey--text lighten-2 font-weight-light">
            Angela@company.com
          </span>

          <br />

          <span class="grey--text lighten-2 font-weight-light">
            Support Agent
          </span>
        </div>
      </v-list-item>

      <div class="ml-10 pl-10">
        <span class="ibial_grey--text ml-2">Status:</span>
        <span class="ibial_darkgrey--text font-weight-bold">Offline</span>
      </div>

      <v-expansion-panels accordion flat>
        <!-- Teams -->
        <v-expansion-panel>
          <v-expansion-panel-header>
            Teams
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-list-item class="px-0">
              <v-avatar color="amber" class="white--text mr-2" size="40">
                <span>G</span>
              </v-avatar>

              <v-list-item-title>General</v-list-item-title>
            </v-list-item>
          </v-expansion-panel-content>

          <v-divider />
        </v-expansion-panel>

        <!-- Chat Info -->
        <v-expansion-panel>
          <v-expansion-panel-header>
            Chat Information
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-list-item class="px-0">
              <v-icon class="mr-2" color="ibial_darkgray">mdi-message</v-icon>

              <v-list-item-title>Total Chats</v-list-item-title>

              <v-list-item-icon class="my-2">
                <span>0</span>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item class="px-0">
              <v-icon class="mr-2" color="ibial_darkgray"
                >mdi-thumb-up-outline</v-icon
              >

              <v-list-item-title>Average rating</v-list-item-title>

              <v-list-item-icon class="my-2">
                <span>n/a</span>
              </v-list-item-icon>
            </v-list-item>
          </v-expansion-panel-content>

          <v-divider />
        </v-expansion-panel>

        <!-- Channels -->
        <v-expansion-panel>
          <v-expansion-panel-header>
            Channels
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-list-item class="px-0">
              <v-list-item-title class="grey--text"
                >Enable access to all channels</v-list-item-title
              >

              <v-list-item-icon class="pa-0 ma-0">
                <v-switch
                  v-model="enableChannels"
                  inset
                  color="primary"
                  class="pa-0 ma-0 mb-2 mt-3"
                  hide-details
                ></v-switch>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item class="px-0">
              <v-list-item-title class="grey--text"
                >Channel 1</v-list-item-title
              >

              <v-list-item-icon class="pa-0 ma-0">
                <v-switch
                  v-model="channel1"
                  inset
                  color="primary"
                  class="pa-0 ma-0 mb-2 mt-3"
                  hide-details
                ></v-switch>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item class="px-0">
              <v-list-item-title class="grey--text"
                >Support email</v-list-item-title
              >

              <v-list-item-icon class="pa-0 ma-0">
                <v-switch
                  v-model="support1"
                  inset
                  color="primary"
                  class="pa-0 ma-0 mb-2 mt-3"
                  hide-details
                ></v-switch>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item class="px-0">
              <v-list-item-title class="grey--text"
                >Support email 2</v-list-item-title
              >

              <v-list-item-icon class="pa-0 ma-0">
                <v-switch
                  v-model="support2"
                  inset
                  color="primary"
                  class="pa-0 ma-0 mb-2 mt-3"
                  hide-details
                ></v-switch>
              </v-list-item-icon>
            </v-list-item>
          </v-expansion-panel-content>

          <v-divider />
        </v-expansion-panel>

        <!-- Chat Info -->
        <v-expansion-panel>
          <v-expansion-panel-header>
            Actions
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-list-item class="px-0">
              <v-list-item-title class="grey--text font-weight-light"
                >Support email 2</v-list-item-title
              >

              <v-list-item-icon class="pa-0 ma-0">
                <v-switch
                  v-model="actions"
                  inset
                  color="primary"
                  class="pa-0 ma-0 mb-2 mt-3"
                  hide-details
                ></v-switch>
              </v-list-item-icon>
            </v-list-item>

            <div class="grey--text font-weight-light">
              This gives the agent full access e.g. viewing stats, managing
              agents, and editing chat settings.
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-layout>

    <v-layout
      v-else
      column
      class="fill-height right__default--width-max d-block"
    >
      <v-card-title class="font-weight-bold subtitle-1 py-3 px-4">
        <span>Sales (3)</span>

        <v-spacer />

        <v-btn icon color="primary">
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider />

      <v-expansion-panels accordion flat>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Tickets
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-list-item class="px-0">
              <v-avatar class="mr-2" size="40">
                <v-img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                ></v-img>
              </v-avatar>

              <v-list-item-title>Mickey A. Agent</v-list-item-title>
            </v-list-item>

            <v-list-item class="px-0 mt-2">
              <v-avatar class="mr-2" size="40">
                <v-img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                ></v-img>
              </v-avatar>

              <v-list-item-title>Agent B</v-list-item-title>
            </v-list-item>
          </v-expansion-panel-content>

          <v-divider />
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            Chat Information
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-list-item class="px-0">
              <v-icon class="mr-2" color="ibial_darkgray">mdi-message</v-icon>

              <v-list-item-title>Total Chats</v-list-item-title>

              <v-list-item-icon class="my-2">
                <span>0</span>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item class="px-0">
              <v-icon class="mr-2" color="ibial_darkgray"
                >mdi-thumb-up-outline</v-icon
              >

              <v-list-item-title>Average rating</v-list-item-title>

              <v-list-item-icon class="my-2">
                <span>n/a</span>
              </v-list-item-icon>
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-divider />
    </v-layout>
  </v-container>
</template>

<script>
import { AllAgents, AllTeams } from '~/components/agents'

export default {
  components: {
    AllAgents,
    AllTeams
  },
  data: () => ({
    contact: 0,
    contactsTabs: ['Agents (2)', 'Teams (3)'],
    enableChannels: 1,
    channel1: 1,
    support1: 1,
    support2: 1,
    actions: 0
  })
}
</script>

<style scoped>
.outline---default-color {
  border: 1px solid #f2f2f2;
}
.outline--right-default {
  border-right: 1px solid #f2f2f2;
}
.outline--bottom-default {
  border-bottom: 1px solid #f2f2f2;
}
.center__default--width-max {
  width: 80%;
}
.right__default--width-max {
  width: 20%;
}
</style>
