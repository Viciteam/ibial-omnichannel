<template>
  <div>
    <v-row>
      <v-col>
        <v-list class="px-3 pt-0 font-weight-light" width="100%">
          <v-list-item-group v-model="selected">
            <v-list-item
              @click="
                routeTo('Unassigned')
                subItem = false
              "
            >
              <v-list-item-content>
                <v-list-item-title class="body-2"
                  >Unassigned Tickets({{ unassigned }})</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-group :value="subItem">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title class="body-2"
                    >My Tickets({{ tickets }})</v-list-item-title
                  >
                </v-list-item-content>
              </template>
              <v-list-item-group v-model="selectedItem">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="
                    routeTo(item.title)
                    subItem = true
                  "
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="body-2"
                      v-text="item.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-chip
                      small
                      class="font-weight-bold"
                      :class="
                        i === selectedItem ? 'color_primary white--text' : ''
                      "
                    >
                      {{ item.value }}
                    </v-chip>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list-group>
            <v-divider />
            <v-list-item
              @click="
                routeTo('All')
                subItem = false
              "
            >
              <v-list-item-content>
                <v-list-item-title class="body-2"
                  >All Tickets({{ allTickets }})</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
      selected: 1,
      subItem: true,
      unassigned: 50,
      tickets: 100,
      allTickets: 230,
      items: [
        {
          active: true,
          title: 'Open',
          value: 5
        },
        {
          title: 'Pending',
          value: 10
        },
        {
          title: 'On Hold',
          value: 50
        },
        {
          title: 'Resolved',
          value: 35
        }
      ]
    }
  },
  mounted() {
    this.$emit('itemSelected', 'Open')
  },
  methods: {
    routeTo(item) {
      console.log(this.selectedItem)
      this.$emit('itemSelected', item)
    }
  }
}
</script>

<style scoped>
.color_primary {
  background: #4db7a1 !important;
}
.line_border {
  box-shadow: inset 0px -1px 0px #ebecef;
}
.v-list-group--active.primary--text,
.v-list-item--active {
  color: #4db7a1 !important;
}
</style>
