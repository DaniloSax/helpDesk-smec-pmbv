 <template>
  <!-- <v-card>
    <v-card-text> -->
      <v-container grid-list-xs>
        <chat>
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
  components: {
    Chat,
    ChatSideBar,
  },
};
</script>
 
 <style>
</style>