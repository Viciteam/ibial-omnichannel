<template>
  <v-layout
    column
    class="fill-height middleContainer__width--max outline--right-default"
  >
    <v-flex class="flex shrink">
      <v-card-title class="body-2 font-weight-bold outline--bottom-default">
        <span>
          Visitor Name
        </span>

        <v-spacer />
        <v-select
          v-model="chatType"
          :items="items"
          hide-details
          class="outline---default-color agentType__container mr-2"
          rounded
          flat
          solo
        ></v-select>

        <v-btn icon outlined class="mr-2 outline---default-color">
          <v-icon color="black" size="20">mdi-phone</v-icon>
        </v-btn>

        <v-btn icon class="mr-2 outline---default-color">
          <v-icon color="black" size="20">mdi-video</v-icon>
        </v-btn>

        <v-btn icon class="mr-2 outline---default-color">
          <v-icon color="black" size="20">mdi-monitor</v-icon>
        </v-btn>

        <v-btn icon class="mr-2 outline---default-color">
          <v-icon color="black" size="20">mdi-check</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-card-title>
    </v-flex>

    <v-flex ref="middleFeed" class="white--text flex overflow-auto">
      <v-card
        v-for="(item, i) in messages"
        :key="i"
        class="pa-2 "
        color="transparent"
        :class="onSenderReciever(item.sender_id)"
        flat
      >
        <v-card
          class="d-flex"
          color="transparent"
          :class="onSenderRecieverFlex(item.sender_id)"
          flat
        >
          <div class="align-self-end mx-2">
            <v-badge
              bordered
              bottom
              color="green accent-4"
              class="item__list--avatar"
              dot
              offset-x="11px"
              offset-y="12px"
            >
              <v-avatar size="35" class="my-1 ">
                <v-img :src="item.avatar"></v-img>
              </v-avatar>
            </v-badge>
          </div>

          <div :class="item.sender_id === 12345 ? 'ml-11' : 'mr-11'">
            <span
              v-if="item.sender_id === 12345 ? false : true"
              class="caption grey--text mx-3"
            >
              Visitor
            </span>
            <v-card
              class="rounded-xl pa-3 body-2"
              :class="
                item.sender_id === 12345
                  ? 'text-right primary lighten-1 white--text'
                  : 'text-left ibial_lightgray'
              "
              color="flat"
              flat
              tile
            >
              <span>
                Flex item asdasd asdasd asdasd asdasd asdasd asdasd asdasd
                asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd
                asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd
                asdasd
              </span>
            </v-card>

            <span
              class="caption grey--text mx-3 my-1"
              :class="item.sender_id === 12345 ? 'float-right' : ''"
            >
              10:30am
            </span>
          </div>
        </v-card>
      </v-card>
    </v-flex>
    <v-flex class="white--text flex shrink pa-4">
      <v-card flat class="outline---default-color">
        <v-tabs
          v-model="postField"
          color="primary"
          height="40"
          class="px-4 py-2"
        >
          <v-tab
            v-for="item in postFieldTabs"
            :key="item"
            class="text-capitalize"
          >
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="postField">
          <v-tab-item key="0" transition="fade" reverse-transition="fade">
            <ChatPostField />
          </v-tab-item>
          <v-tab-item key="1" transition="fade" reverse-transition="fade">
            <EmailPostField />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { ChatPostField, EmailPostField } from './center-section'

export default {
  components: {
    ChatPostField,
    EmailPostField
  },
  data: () => ({
    postField: 0,
    postFieldTabs: ['Chats', 'Email'],
    chatType: 'Agent',
    items: ['Agent', 'Agent 1', 'Agent 2', 'Agent 3'],
    messages: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg?v=1',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12341
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg?v=1',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg?v=1',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12341
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg?v=1',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg?v=1',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12341
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      }
    ]
  }),

  mounted() {
    // This will be called on load
    this.scrollToEnd()
  },

  updated() {
    // This will be called when the component updates
    // try toggling a todo
    this.scrollToEnd()
  },

  methods: {
    scrollToEnd() {
      var content = this.$refs.middleFeed
      content.scrollTop = content.scrollHeight
    },

    /**
     * align changer base on who is the sender and whos the reciever
     */
    onSenderReciever(sender_id) {
      return sender_id === 12345 ? 'align-self-end' : 'align-self-start'
    },

    /**
     * flex changer base on who is the sender and whos the reciever
     */
    onSenderRecieverFlex(sender_id) {
      return sender_id === 12345 ? 'flex-row-reverse' : 'flex-row'
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
.agentType__container {
  max-width: 130px;
  max-height: 39px;
}
.rounded-xl {
  border-radius: 24px;
}
</style>

<style>
.agentType__container .v-input__slot {
  padding: 0 15px !important;
  min-height: 36px !important;
  max-height: 36px !important;
  background: transparent;
}
.agentType__container .v-input__control {
  min-height: 36px !important;
  max-height: 36px !important;
  background: transparent;
}
</style>
