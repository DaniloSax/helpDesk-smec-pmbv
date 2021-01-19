 <template>
  <!-- <v-sheet color="white" elevation="1" height="100%" width="100%"> -->
  <v-card min-height="500" elevation="0" tile>
    <v-row class="blue-grey lighten-5">
      <div class="mb-2">
        <slot name="sidebar"></slot>
      </div>
      <!-- <ChatSideBar /> -->
      <v-col class="d-flex flex-column justify-end" id="message-container">
        <!-- messages -->
        <v-responsive>
          <v-virtual-scroll
            :bench="0"
            :items="messages"
            :item-height="$vuetify.breakpoint.mobile ? '100' : '110'"
            height="400"
            max-height="200%"
          >
            <template v-slot:default="{ item }">
              <v-alert
                :color="
                  item.participantId === 3
                    ? 'primary white--text'
                    : 'blue-grey lighten-4'
                "
                max-width="100%"
                :value="true"
                class="rounded-pill ma-3 text-left"
                :class="
                  item.participantId === 3 ? 'rounded-br-0' : 'rounded-bl-0'
                "
              >
                <!-- content -->
                <!-- <div class="ml-4"> -->
                <div class="pa-2">
                  {{ item.content }}
                  <!-- timestamp -->
                  <div class="subtitle-2 font-weight-light text-right">
                    {{ item.timestamp.day }}/{{ item.timestamp.month }}/{{
                      item.timestamp.year
                    }}
                    {{ item.timestamp.hour }}:{{ item.timestamp.minute }}H
                  </div>
                </div>
                <!-- </div> -->
              </v-alert>
            </template>
          </v-virtual-scroll>
        </v-responsive>

        <!-- send -->
      </v-col>
    </v-row>
    <v-row class="blue-grey lighten-3">
      <v-col>
        <ChatFooter @push-message="send($event)" />
      </v-col>
    </v-row>
  </v-card>

  <!-- </v-sheet> -->
</template>
 
 <script>
// import ChatEmojis from "./ChatEmojis";
import ChatFooter from "./ChatFooter";
// import ChatSideBar from "./ChatSideBar";

export default {
  components: { ChatFooter },
  props: {
    messagesProps: { type: Array, required: false },
  },
  data() {
    return {
      users: [
        {
          name: "Arnaldo",
          id: 1,
        },
        {
          name: "José",
          id: 2,
        },
      ],
      messages: [
        {
          content: "minha mensagem sendo enviada",
          myself: false,
          participantId: 1,
          timestamp: {
            year: 2019,
            month: 3,
            day: 5,
            hour: 20,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content:
            "Mensagem 1 sendo carregado na lista de mensagens. testando conteudo longo ... testando mais espaços",
          myself: true,
          participantId: 3,
          timestamp: {
            year: 2019,
            month: 4,
            day: 5,
            hour: 19,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: "outra mensagem",
          myself: false,
          participantId: 1,
          timestamp: {
            year: 2019,
            month: 5,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: "outra mensagem",
          myself: false,
          participantId: 3,
          timestamp: {
            year: 2019,
            month: 5,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: "outra mensagem",
          myself: false,
          participantId: 1,
          timestamp: {
            year: 2019,
            month: 5,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: "outra mensagem",
          myself: false,
          participantId: 3,
          timestamp: {
            year: 2019,
            month: 5,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
      ],
    };
  },
  computed: {
    pageHeight() {
      const container = document.getElementById("message-container")
        .scrollHeight;
      console.log(container);
      // return document.body.scrollHeight;
      return container;
    },
  },
  methods: {
    send(event) {
      this.messages.push(event);
      this.scrollToEnd();
    },
    scrollToEnd() {
      const element = document.getElementById("message-container");
      element.scrollTop = element.scrollHeight;
      // this.$vuetify.goTo(element);
    },
  },
};
</script>
 
 <style>
.line-message {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 62px;
  margin-bottom: 0%;
  background-color: #c0c0c0;
  user-select: text;
}
</style>