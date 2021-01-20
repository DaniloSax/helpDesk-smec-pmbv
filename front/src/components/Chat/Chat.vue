 <template>
  <v-card min-height="500" elevation="0" tile>
    <v-row class="blue-grey lighten-5">
      <div class="mb-2">
        <slot name="sidebar"></slot>
      </div>
      <v-col class="d-flex flex-column justify-end" id="message-container">
        <!-- messages -->
        <v-responsive>
          <slot name="content"></slot>
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
import ChatFooter from "./ChatFooter";

export default {
  components: { ChatFooter },
  props: {
    messagesProps: { type: Array, required: false },
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