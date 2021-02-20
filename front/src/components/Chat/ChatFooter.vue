 <template>
  <div
    class="d-flex align-baseline blue-grey lighten-3 pa-3"
    style="width: 100%; height: 100%"
  >
    <ChatEmojis @input-emoji="getEmoji" />

    <v-text-field
      background-color="blue-grey lighten-4"
      label="Digite uma mensagem"
      v-model="message.content"
      :rules="wordsRules"
      counter="5"
      :counter-value="(v) => v.trim().split(' ').length"
      @keyup.enter="send()"
      hint="limite de 5 palavras"
      filled
      dense
      rounded
      solo
      autofocus
    >
      <template v-slot:append-outer>
        <v-icon
          medium
          color="primary"
          @click.prevent="send()"
          :disabled="!message.content"
        >
          mdi-send
        </v-icon>
      </template>
    </v-text-field>
    {{ messages }}
  </div>
</template>
 
 <script>
import ChatEmojis from "./ChatEmojis";
import { mapGetters } from "vuex";

export default {
  async mounted() {
    await this.$store.dispatch("getAuth");

    window.Echo.private(`user-chat${this.auth.id}`).listen(
      "SendMessage",
      (resp) => {
        console.log("resposta do Echo", resp.message);
        this.messages.push(resp.message)
        this.$store.dispatch("send_new_message", resp.message);
      }
    );

    // console.log('mensagens do ECHo',this.messages)
  },
  data() {
    return {
      message: {
        content: "",
      },
      messages: [],
      wordsRules: [(v) => v.trim().split(" ").length <= 5 || "Max 5 palavras"],
    };
  },
  components: { ChatEmojis },

  computed: {
    ...mapGetters(["auth", "getTo"]),
  },

  methods: {
    getEmoji(event) {
      this.message.content = this.message.content + event.native;
    },

    send() {
      const message = {
        from: this.auth.id,
        to: this.getTo,
        content: this.message.content,
      };

      this.$store.dispatch("send_new_message", message);

      this.message.content = "";
    },
  },
};
</script>
 
 <style>
</style>