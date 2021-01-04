<template>
  <div>
    <v-card>
      <v-card-title>
        New Ticket #000
      </v-card-title>
      <v-divider />
      <v-card-text class="px-6">
        <v-row>
          <v-col class="pt-0">
            <span class="caption">Ticket Subject</span>
            <v-text-field outlined dense hide-details></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <span class="caption">Requester</span>
            <v-text-field
              outlined
              dense
              hide-details
              placeholder="Type to search contacts"
            ></v-text-field>
            <span class="d-flex justify-end">
              <v-btn text small class="text-capitalize primary--text">
                Add New Contact
              </v-btn>
            </span>
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
            <span class="caption">Team</span>
            <v-select hide-details dense outlined>
              <template v-slot:append>
                <v-icon>mdi-chevron-down</v-icon>
              </template>
            </v-select>
          </v-col>
          <v-col class="pt-0">
            <span class="caption">Agent</span>
            <v-select hide-details dense outlined>
              <template v-slot:append>
                <v-icon>mdi-chevron-down</v-icon>
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <span class="caption">Due date</span>
            <v-select hide-details dense outlined>
              <template v-slot:append>
                <v-icon>mdi-chevron-down</v-icon>
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <span class="caption">Description</span>
            <v-textarea
              outlined
              hide-details
              rows="2"
              placeholder="Enter details here"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <span class="caption">Tags</span>
            <v-text-field outlined dense hide-details></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col class="text-right py-0 px-6">
            <v-btn rounded outlined class="text-capitalize">Cancel</v-btn>
            <v-btn rounded color="primary" class="text-capitalize ml-3">
              Create Ticket
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
