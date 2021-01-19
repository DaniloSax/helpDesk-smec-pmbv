 <template>
  <!-- <v-card>
    <v-card-text> -->
  <v-container grid-list-xs>
    <chat :messages-props="messages">
      <template v-slot:sidebar>
        <ChatSideBar />
      </template>
    </chat>
  </v-container>
  <!-- </v-card-text>
  </v-card> -->
</template>
 
 <script>
import Chat from "@/components/Chat/Chat";
import ChatSideBar from "../../components/Chat/ChatSideBar";

export default {
  mounted() {
    const { data } = this.$store.dispatch("loadMesages");
    this.messages = data;
  },
  components: {
    Chat,
    ChatSideBar,
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