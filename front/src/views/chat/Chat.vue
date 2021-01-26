 <template>
  <!-- <v-card>
    <v-card-text> -->
  <v-container grid-list-xs>
    <chat :messages-props="messages">
      <template v-slot:sidebar>
        <ChatSideBar />
      </template>
      <template v-slot:content>
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

export default {
  mounted() {
    this.$store.dispatch("load_chat_user");
    this.$store.dispatch("loadMessages");
  },
  components: {
    Chat,
    ChatSideBar,
    ChatContent,
  },
  data() {
    return {
      messages: [],
    };
  },
};
</script>
 
 <style>
</style>