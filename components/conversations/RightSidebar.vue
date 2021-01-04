<template>
  <v-layout column class="fill-height rightSidebar__width--max">
    <v-flex class="white--text flex overflow-auto">
      <v-tabs
        v-model="postField"
        background-color="transparent"
        height="56"
        class="px-4 pt-1 my-2 outline--bottom-default"
        grow
      >
        <v-tab
          v-for="item in postFieldTabs"
          :key="item"
          class="text-capitalize body-1 font-weight-bold"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="postField">
        <v-tab-item key="0" transition="fade" reverse-transition="fade">
          <v-card flat class="px-5 py-2 pb-5">
            <v-list-item class="pa-0 ibial_lightgray--text font-weight-light">
              Name:
              <strong class="ibial__darkgray--text font-weight-bold pl-2"
                >Visitor Name</strong
              >
            </v-list-item>

            <v-list-item class="pa-0 ibial_lightgray--text font-weight-light">
              Location:
              <strong class="ibial__darkgray--text font-weight-bold pl-2"
                >Vietnam</strong
              >
            </v-list-item>

            <v-list-item class="pa-0 ibial_lightgray--text font-weight-light">
              Email:
              <strong class="ibial__darkgray--text font-weight-bold pl-2"
                >guest@gmail.com</strong
              >
            </v-list-item>

            <v-list-item class="pa-0 ibial_lightgray--text font-weight-light">
              Phone:
              <strong class="ibial__darkgray--text font-weight-bold pl-2"
                >--</strong
              >
            </v-list-item>

            <v-list-item class="pa-0 ibial_lightgray--text font-weight-light">
              Chat ID:
              <strong class="ibial__darkgray--text font-weight-bold pl-2"
                >012345678</strong
              >
            </v-list-item>

            <v-list-item class="pa-0 ibial_lightgray--text font-weight-light">
              Customer IP:
              <strong class="ibial__darkgray--text font-weight-bold pl-2"
                >111.111.111</strong
              >
            </v-list-item>

            <v-list-item class="pa-0 ibial_lightgray--text">
              <span class="ibial__darkgray--text font-weight-bold">
                <span class="font-weight-light pr-1">Note:</span>

                Modo diam ferri te pro, ex graece petentium usu. Eam ut
                tincidunt contentiones. Edit note</span
              >
            </v-list-item>
          </v-card>

          <v-divider />

          <v-expansion-panels accordion flat>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Tickets

                <v-spacer />

                <span class="ibial_gray--text text-right body-1"> 0</span>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-divider />
        </v-tab-item>

        <v-tab-item key="1" transition="fade" reverse-transition="fade">
          <v-card flat class="px-5 py-2 pb-5">
            <v-text-field
              class="outline---default-color textfield--rounded"
              placeholder="Search for answers.."
              prepend-inner-icon="mdi-magnify"
              hide-details
              solo
              flat
            ></v-text-field>

            <v-card
              v-for="n in 3"
              :key="n"
              flat
              outlined
              class="knowledgebase--widget-card pa-5 mt-4 rounded-xl"
            >
              <v-card-title class="font-weight-bold subtitle-1 pa-0 pb-3 ma-0">
                Topic X ({{ n }})
              </v-card-title>

              <ul>
                <li>First Orbital Class Rocket Ca...</li>
                <li>Service to earth orbit, moon...</li>
                <li>First private lunar mission</li>
              </ul>
            </v-card>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    postField: 1,
    postFieldTabs: ['Details', 'Knowledgebase']
  })
}
</script>

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
.textfield--rounded {
  border-radius: 50px !important;
}
.knowledgebase--widget-card::before {
  content: '';
  width: 100%;
  height: 7px;
  display: block;
  background: #4db7a1;
  position: absolute;
  top: 0;
  left: 0;
}
.rounded-xl {
  border-radius: 10px !important;
  overflow: hidden;
}
</style>
