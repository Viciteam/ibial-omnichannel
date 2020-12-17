<template>
  <div>
    <v-row>
      <v-col cols="10" offset="1" class="py-0 body-2">
        <div class="px-3">
          <v-row>
            <v-col cols="1">
              <v-avatar size="40" color="#CEDAFF">
                R
              </v-avatar>
            </v-col>
            <v-col>
              <div>
                <span class="font-weight-bold">Ron Swanson</span>
                <span class="font-weight-light">submitted via email</span>
                &lt;<span class="medium--gray">customer@email.com</span>&gt;
              </div>
              <div class="caption">
                To:
                <span class="medium--gray">sample@email.com</span>
              </div>
            </v-col>
            <v-col cols="3" class="text-right">
              <span class="medium--gray caption">
                Nov. 30, 2020 7:00 pm
              </span>
            </v-col>
          </v-row>
          <v-row class="bottom_border">
            <v-col cols="1"></v-col>
            <v-col>
              <p>Hello</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                An pro assum minim quaestio, ludus offendit ad mel. Pro dicta
                doctus dissentiunt eu. Pri doctus legimus scaevola ne. In eum
                tale hendrerit. Quas consulatu mea id. Agam dignissim id cum, et
                quem ullum eum, iuvaret detracto voluptaria.
              </p>
            </v-col>
          </v-row>
          <v-row class="bottom_border">
            <v-col cols="1">
              <v-avatar size="40" color="#CEDAFF">
                A
              </v-avatar>
            </v-col>
            <v-col>
              <div class="pt-2">
                <span class="font-weight-bold">Agent</span>
                <span class="font-weight-light">assigned this ticket to</span>
                <span class="font-weight-bold">Another Agent</span>
              </div>
            </v-col>
            <v-col cols="3" class="text-right">
              <span class="medium--gray caption">
                Nov. 30, 2020 7:00 pm
              </span>
            </v-col>
          </v-row>
          <v-row class="bottom_border">
            <v-col cols="1">
              <v-avatar size="40" color="#CEDAFF">
                A
              </v-avatar>
            </v-col>
            <v-col>
              <div class="pt-2">
                <span class="font-weight-bold">Agent</span>
                <span class="font-weight-light">resolved this ticket</span>
              </div>
            </v-col>
            <v-col cols="3" class="text-right">
              <span class="medium--gray caption">
                Nov. 30, 2020 7:00 pm
              </span>
            </v-col>
          </v-row>
        </div>
        <div class="border--shadow px-3 pb-3 reply--area">
          <v-row>
            <v-col class="pb-0">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    <v-icon>mdi-reply</v-icon>
                    <v-icon right>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Reply</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <span class="font-weight-light">From:</span>
              <span class="font-weight-bold">John</span>
              <span class="font-weight-light">(customerservice@ibial.com)</span>
              <v-btn small icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="bottom_border">
            <v-col>
              <span class="font-weight-light">To:</span>
              <v-chip outlined>
                <span>customer@gmail.com</span>
                <v-icon small right>mdi-close</v-icon>
              </v-chip>
            </v-col>
            <v-col cols="3" class="text-right">
              <v-btn text class="text-capitalize">Cc</v-btn>
              <v-btn text class="text-capitalize">Bcc</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                placeholder="Type your reply here..."
                rows="3"
                class="body-2"
                hide-details
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-space-between">
              <div>
                <v-btn icon>
                  <v-icon>mdi-paperclip</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-emoticon-happy-outline</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-message-plus-outline</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
                <span class="pl-6">
                  <v-btn icon>
                    <v-icon>mdi-message-processing-outline</v-icon>
                  </v-btn>
                  <span>Discuss</span>
                </span>
                <span class="pl-6">
                  <v-btn icon>
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </span>
              </div>
              <div>
                <v-btn rounded color="primary" class="text-capitalize">
                  Send
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.medium--gray {
  color: #a0a8b0;
}
.bottom_border {
  box-shadow: inset 0px -1px 0px #ebecef;
}
.border--shadow {
  border: 1px solid #ebecef;
  border-radius: 8px;
}
</style>
