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
    <v-row>
      <v-col class="pt-0">
        <span class="caption">Minimized bar text</span>
        <v-text-field outlined dense hide-details></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0">
        <span class="caption">Offline bar text</span>
        <v-text-field outlined dense hide-details></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>
