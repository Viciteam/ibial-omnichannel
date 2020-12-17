<template>
  <div>
    <v-row>
      <v-col class="py-0">
        <v-row class="caption bottom_border font-weight-bold">
          <v-col cols="4">
            REQUESTER
          </v-col>
          <v-col cols="4">
            TICKET TITLE/SUBJECT
          </v-col>
          <v-col cols="2">
            STATUS
          </v-col>
          <v-col cols="2">
            DATE CREATED
          </v-col>
        </v-row>
        <v-row
          v-for="item in data"
          :key="item.id"
          class="body-2 bottom_border tickets"
          @click="action(item)"
        >
          <v-col cols="4">
            <v-row>
              <v-col cols="3" class="py-0">
                <v-badge avatar bordered bottom overlap>
                  <template v-slot:badge>
                    <v-avatar color="white" class="black--text">
                      <v-icon>mdi-email-outline</v-icon>
                    </v-avatar>
                  </template>

                  <v-avatar size="40" class="bgcolor--lightmaroon">
                    M
                  </v-avatar>
                </v-badge>
              </v-col>
              <v-col cols="9" class="py-0">
                <v-row class="font-weight-bold">
                  {{ item.name }}
                </v-row>
                <v-row class="caption medium--gray">
                  {{ item.email }}
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="pt-6">
            {{ item.subject }}
            <span class="medium--gray">{{ item.tag }}</span>
          </v-col>
          <v-col cols="2" class="pt-6">
            <v-chip x-small class="text-uppercase" :class="item.status">
              {{ item.status }}
            </v-chip>
          </v-col>
          <v-col cols="2" class="pt-6">
            {{ item.date }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: 'Name',
          email: 'name@email.com',
          subject: 'Ticket subject title here.',
          tag: '#005',
          status: 'open',
          date: 'Yesterday'
        },
        {
          id: 2,
          name: 'Name',
          email: 'name@email.com',
          subject: 'Ticket subject title here.',
          tag: '#005',
          status: 'open',
          date: 'Nov 12 2020'
        },
        {
          id: 3,
          name: 'Name',
          email: 'name@email.com',
          subject: 'Ticket subject title here.',
          tag: '#005',
          status: 'open',
          date: 'Nov 03 2020'
        },
        {
          id: 4,
          name: 'Name',
          email: 'name@email.com',
          subject: 'Ticket subject title here.',
          tag: '#005',
          status: 'open',
          date: 'Nov 03 2020'
        },
        {
          id: 5,
          name: 'Name',
          email: 'name@email.com',
          subject: 'Ticket subject title here.',
          tag: '#005',
          status: 'open',
          date: 'Nov 03 2020'
        }
      ]
    }
  },
  methods: {
    action(item) {
      this.$router.push({
        path: '/tickets/conversation',
        query: { item: item }
      })
    }
  }
}
</script>

<style scoped>
.bgcolor--lightmaroon {
  background-color: #ffe3ce !important;
}
.bottom_border {
  box-shadow: inset 0px -1px 0px #ebecef;
}
.medium--gray {
  color: #a0a8b0;
}
.tickets {
  cursor: pointer;
}
.new {
  background: #eb5757 !important;
  color: white;
}
.open {
  background: #fff !important;
  border: 1px solid grey;
}
.pending {
  background: #3c8fff !important;
  color: white;
}
.hold {
  background: #50649c !important;
  color: white;
}
.resolved {
  background: #27ae60 !important;
  color: white;
}
</style>
