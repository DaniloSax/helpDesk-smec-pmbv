 <template>
  <v-menu
    v-model="showMenu"
    :close-on-content-click="false"
    transition="scroll-y-reverse-transition"
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
        right
      >
        <v-icon dark> mdi-message-text </v-icon>
      </v-btn>
    </template>
    <Chat />
  </v-menu>
</template>
 
 <script>
import Chat from "./Chat";

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  components: { Chat },
};
</script>
 
 <style>
</style>