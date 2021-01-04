<template>
  <v-layout
    column
    class="fill-height middleContainer__width--max outline--right-default"
  >
    <v-flex class="flex shrink">
      <v-card-title class="body-2 font-weight-bold outline--bottom-default">
        <span>
          {{ navtitle }}
        </span>
      </v-card-title>
    </v-flex>
    <v-flex class="flex overflow-auto px-6">
      <Appearance
        v-if="
          navtitle === 'Appearance' || navtitle === 'Chat Widget Customization'
        "
      />
      <TextSettings v-else-if="navtitle === 'Text'" />
      <NotificationVisibility
        v-else-if="navtitle === 'Notifications & Visibility'"
      />
    </v-flex>
  </v-layout>
</template>
<script>
import {
  Appearance,
  TextSettings,
  NotificationVisibility
} from '@/components/settings/widget'
export default {
  components: {
    Appearance,
    TextSettings,
    NotificationVisibility
  },
  props: {
    nav: {
      type: String,
      default: null
    }
  },
  computed: {
    navtitle() {
      return this.nav === '' ? 'Chat Widget' : this.nav
    }
  }
}
</script>

<style scoped>
.middleContainer__width--max {
  max-width: 54%;
  min-width: 54%;
}
.outline---default-color {
  border: 1px solid #f2f2f2;
}
.outline--right-default {
  border-right: 1px solid #f2f2f2;
}
.outline--bottom-default {
  border-bottom: 1px solid #f2f2f2;
}
</style>
