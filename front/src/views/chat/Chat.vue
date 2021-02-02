 <template>
  <!-- <v-card>
    <v-card-text> -->
  <v-container grid-list-xs>
    <chat :messages-props="messages">
      <template v-slot:sidebar>
        <ChatSideBar />
      </template>
      <template v-slot:content>
        <!-- <FormValidChatAdmin v-show="!toMessage.valid" /> -->

        <ChatContent />
      </template>
    </chat>
  </v-container>
  <!-- </v-card-text>
  </v-card> -->
</template>
 
 <script>
import Chat from "@/components/Chat/Chat";
import ChatSideBar from "@/components/Chat/ChatSideBar";
import ChatContent from "@/components/Chat/ChatContent";
// import FormValidChatAdmin from "./FormValidateChatAdmin";

export default {
  async mounted() {
    await this.$store.dispatch("load_chat_user");
    await this.$store.dispatch("loadMessages");
    this.$store.dispatch("loadUsers");
  },
  components: {
    Chat,
    ChatSideBar,
    ChatContent,
    // FormValidChatAdmin,
  },
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    // toMessage: {
    //   get() {
    //     return this.$store.getters.getToMessage;
    //   },
    //   set(value) {
    //     this.$store.commit("UPDATE_TO_MESSAGE", value);
    //   },
    // },
  },
};
</script>
 
 <style>
</style>