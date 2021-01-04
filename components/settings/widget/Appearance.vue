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
        <span class="caption">Widget Name</span>
        <v-text-field outlined dense hide-details></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <span class="caption">Widget Status</span>
        <div class="d-flex justify-space-between">
          <span class="body-2 pl-3 pt-5">Active</span>
          <span>
            <v-switch v-model="status" inset></v-switch>
          </span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0">
        <span class="caption">Widget Code</span>
        <v-textarea rows="3" outlined></v-textarea>
        <div class="d-flex justify-end mt-n12">
          <v-btn tile color="primary" class="text-capitalize mt-n5">
            Copy
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <span class="caption">Widget Color</span>
        <div class="py-3 pl-3 d-flex justify-start">
          <input
            v-model="color"
            type="color"
            value="#4db7a1"
            class="color--picker"
          />
          <span class="body-2 pl-3 pt-2">{{ color }}</span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0">
        <span class="caption">Minimized Window</span>
        <div class="d-flex pl-3 pt-2">
          <div>
            <div class="pa-4 minimized__logo">
              <v-img src="logo/bubble_logo.png" width="40" />
            </div>
            <div class="caption text-center">Bubble</div>
          </div>
          <div>
            <div class="pa-4 ml-6 minimized__logo">
              <v-img src="logo/chat_bar.png" width="40" />
            </div>
            <div class="caption ml-6 text-center">Bar</div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0">
        <span class="caption">Chat Icon</span>
        <div class="d-flex pl-3 pt-2">
          <div class="pa-2 chat__logo">
            <v-img src="logo/hand_inactive.png" width="30" />
          </div>
          <div class="pa-2 ml-3 chat__logo">
            <v-img src="logo/bubble_variant.png" width="30" />
          </div>
          <div class="pa-2 ml-3 chat__logo">
            <v-icon>mdi-plus</v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <div class="d-flex justify-space-between">
          <span class="body-2 pl-3 pt-5">Show agent's job title</span>
          <span>
            <v-switch v-model="jobTitle" inset class="py-0"></v-switch>
          </span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <div class="d-flex justify-space-between">
          <span class="body-2 pl-3 pt-5">Show agent's photo</span>
          <span>
            <v-switch v-model="agentPhoto" inset class="py-0"></v-switch>
          </span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <div class="d-flex justify-space-between">
          <div>
            <span class="body-2 pl-3 pt-5">Show logo</span>
            <div class="ml-6 my-3">
              <v-avatar size="60" color="grey"></v-avatar>
              <v-btn text class="pl-6 text-capitalize">
                <span class="body-2 primary--text">Upload logo</span>
              </v-btn>
            </div>
          </div>
          <span>
            <v-switch v-model="showLogo" inset class="py-0"></v-switch>
          </span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn text class="text-capitalize">
          <span class="body-2 red--text">Delete Widget</span>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#4db7a1',
      showCanvas: true,
      status: true,
      jobTitle: true,
      agentPhoto: false,
      showLogo: false
    }
  }
}
</script>

<style scoped>
.color--picker {
  height: 40px;
  width: 40px;
}
.minimized__logo,
.chat__logo {
  border: 1px solid #dfdfe1;
}

.chat__logo:hover,
.minimized__logo:hover {
  cursor: pointer;
}
</style>
