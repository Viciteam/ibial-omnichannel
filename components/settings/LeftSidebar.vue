<template>
  <v-layout
    column
    class="fill-height leftSidebar__width--max outline--right-default"
  >
    <v-flex class="flex shrink">
      <v-card-title class="body-2 font-weight-bold outline--bottom-default">
        <span>
          Settings
        </span>
      </v-card-title>
    </v-flex>
    <v-flex class="flex">
      <v-list>
        <v-list-group
          v-for="item in navigation"
          :key="item.id"
          v-model="selected"
          :append-icon="!item.category ? '' : 'mdi-chevron-down'"
          @click="navigate(item.title)"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="body-2">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item-group>
            <v-list-item
              v-for="child in item.category"
              :key="child"
              @click="navigate(child)"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="body-2 pl-6"
                  v-text="child"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        {
          id: 1,
          title: 'Chat Widget Customization',
          category: ['Appearance', 'Text', 'Notifications & Visibility']
        },
        {
          id: 2,
          title: 'Surveys & Ratings'
        },
        {
          id: 3,
          title: 'Chat & Agent Settings',
          category: ['Agent Score and Points']
        },
        {
          id: 4,
          title: 'Ticket Settings'
        },
        {
          id: 5,
          title: 'Channels'
        },
        {
          id: 6,
          title: 'Banned Visitors'
        }
      ]
    }
  },
  mounted() {
    this.$emit('title', 'Appearance')
  },
  methods: {
    navigate(title) {
      this.$emit('title', title)
    }
  }
}
</script>

<style scoped>
.leftSidebar__width--max {
  max-width: 23%;
}
.outline--right-default {
  border-right: 1px solid #f2f2f2;
}
.outline--bottom-default {
  border-bottom: 1px solid #f2f2f2;
}
.v-list-item--active {
  border-right: 2px solid #4db7a1 !important;
}
</style>
