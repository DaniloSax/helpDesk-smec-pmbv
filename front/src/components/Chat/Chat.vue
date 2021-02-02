 <template>
  <v-card min-height="450px" elevation="0" tile >
    <v-card-text>
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
    </v-card-text>
    <!-- <v-row class="blue-grey lighten-3 card-actions"> -->
    <v-card-actions class="pa-0">
      <!-- <v-col> -->
        <ChatFooter />
      <!-- </v-col> -->
    </v-card-actions>
    <!-- </v-row> -->
  </v-card>

  <!-- </v-sheet> -->
</template>
 
 <script>
import ChatFooter from "./ChatFooter";

export default {
  components: { ChatFooter },
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
</style>