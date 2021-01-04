<template>
  <div>
    <v-row>
      <v-col>
        <div class="d-flex justify-space-between">
          <span class="caption">Widget</span>
          <v-btn small text color="primary" class="text-capitalize">
            <span class="caption">+ New Widget</span>
          </v-btn>
        </div>
        <v-select
          outlined
          dense
          append-icon="mdi-chevron-down"
          hide-details
        ></v-select>
      </v-col>
    </v-row>
    <v-expansion-panels flat>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0 font-weight-bold">
          Notifications
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col class="pa-0">
              <div class="d-flex justify-space-between">
                <span class="body-2 pl-3 pt-5">
                  Enable sound notification
                </span>
                <span>
                  <v-switch inset class="py-0"></v-switch>
                </span>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-0">
              <div class="d-flex justify-space-between">
                <span class="body-2 pl-3 pt-5">
                  Disable message preview
                </span>
                <span>
                  <v-switch inset class="py-0"></v-switch>
                </span>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-0">
              <div class="d-flex justify-space-between">
                <span class="body-2 pl-3 pt-5">
                  Disable visitor typing function
                </span>
                <span>
                  <v-switch inset class="py-0"></v-switch>
                </span>
              </div>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0 font-weight-bold">
          Visibility
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col class="pa-0">
              <div class="d-flex justify-space-between">
                <span class="body-2 pl-3 pt-5">
                  Hide widget when agents are offline
                </span>
                <span>
                  <v-switch inset class="py-0"></v-switch>
                </span>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-0">
              <div class="d-flex justify-space-between">
                <span class="body-2 pl-3 pt-5">
                  Hide widget on mobile
                </span>
                <span>
                  <v-switch inset class="py-0"></v-switch>
                </span>
              </div>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0 font-weight-bold">
          Availability
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col class="pt-0">
              <span class="caption">Availability</span>
              <v-select
                outlined
                dense
                append-icon="mdi-chevron-down"
                hide-details
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0">
              <span class="caption">Timezone</span>
              <v-select
                outlined
                dense
                append-icon="mdi-chevron-down"
                hide-details
              ></v-select>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
