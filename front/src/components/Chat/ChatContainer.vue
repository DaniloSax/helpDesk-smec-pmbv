 <template>
  <v-menu
    v-model="showMenu"
    :close-on-content-click="false"
    transition="scroll-y-reverse-transition"
    max-width="50%"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        v-bind="attrs"
        v-on="on"
        fab
        dark
        large
        fixed
        bottom
      >
        <v-icon dark> mdi-message-text </v-icon>
      </v-btn>
    </template>
    
    <FormValidChat
      v-if="currentComponent !== 'Chat'"
      @valid-chat="currentComponent = $event"
    />

    <v-expand-x-transition>
      <chat v-show="currentComponent === 'Chat'">
        <template v-slot:content>
          <v-container grid-list-xs>
            <ChatContent />
          </v-container>
        </template>
      </chat>
    </v-expand-x-transition>
  </v-menu>
</template>
 
 <script>
import Chat from "./Chat";
import ChatContent from "./ChatContent";
import FormValidChat from "./FormValidChat";
import { mapGetters } from "vuex";

export default {
  mounted() {
    // console.log(Chat);
  },
  data() {
    return {
      showMenu: false,
      currentComponent: "FormValidChat",
    };
  },
  components: {
    Chat,
    ChatContent,
    FormValidChat,
  },
  computed: {
    ...mapGetters(["getcurrentMessages"]),
  },
};
</script>
 
 <style>
</style>