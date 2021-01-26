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

    <!-- <chat>
      <template v-slot:content>
        <v-container grid-list-xs>
          <ChatContent/> -->
          <keep-alive>
            <component v-bind:is="currentComponent"></component>
          </keep-alive>
        <!-- </v-container>
      </template>
    </chat> -->
  </v-menu>
</template>
 
 <script>
import Chat from "./Chat";
import ChatContent from "./ChatContent";
// import FormValidChat from './FormValidChat'
import { mapGetters } from "vuex";

const ChatComponent = { 
  template: Chat,
  content: ChatContent,

}

export default {
  data() {
    return {
      showMenu: false,
      currentComponent: ChatComponent,
    };
  },
  render(h){
    return h(Chat, ChatContent)
  },
  components: {
    Chat,
    ChatContent,
    // FormValidChat
  },
  computed: {
    ...mapGetters(["getcurrentMessages"]),
  },
};
</script>
 
 <style>
</style>