<template>
  <v-container fluid class="fill-height pa-0">
    <LeftSidebar @title="navigation" />
    <BodyContent :nav="navTitle" />
    <RightSidebar />
  </v-container>
</template>

<script>
import { LeftSidebar, BodyContent, RightSidebar } from '@/components/settings'
export default {
  layout: 'conversation',
  components: {
    LeftSidebar,
    BodyContent,
    RightSidebar
  },
  data() {
    return {
      navTitle: ''
    }
  },
  methods: {
    navigation(value) {
      this.navTitle = value
    }
  }
}
</script>
