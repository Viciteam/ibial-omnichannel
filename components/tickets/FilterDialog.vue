<template>
  <div>
    <v-card class="pa-6">
      <v-row v-if="category === 'All'">
        <v-col class="pt-0">
          <span class="caption">Agent</span>
          <v-select hide-details dense outlined>
            <template v-slot:append>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row v-if="category === 'All'">
        <v-col class="pt-0">
          <span class="caption">Team</span>
          <v-select hide-details dense outlined>
            <template v-slot:append>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-0">
          <span class="caption">Status</span>
          <v-select hide-details dense outlined>
            <template v-slot:append>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-0">
          <span class="caption">Date created</span>
          <v-select hide-details dense outlined>
            <template v-slot:append>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-0">
          <span class="caption">Due by</span>
          <v-select hide-details dense outlined>
            <template v-slot:append>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-0">
          <span class="caption">Tags</span>
          <v-select hide-details dense outlined>
            <template v-slot:append>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            rounded
            color="primary"
            width="100%"
            class="py-5 text-capitalize"
            >Apply filters</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: null
    }
  }
}
</script>
