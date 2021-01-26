 <template>
  <div class="d-flex align-baseline blue-grey lighten-3">
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
  </div>
</template>
 
 <script>
import ChatEmojis from "./ChatEmojis";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      message: {
        content: "",
      },
      wordsRules: [(v) => v.trim().split(" ").length <= 5 || "Max 5 palavras"],
    };
  },
  components: { ChatEmojis },

  computed: {
    ...mapGetters(["auth", "getcurrentMessages"]),
  },

  methods: {
    getEmoji(event) {
      this.message.content = this.message.content + event.native;
    },

    send() {
      const to = this.getcurrentMessages.map((msg) => msg.to)[0];

      const message = {
        call_id: 156,
        from: this.auth.id,
        to,
        content: this.message.content,
        created_at: new Date(),
      };

      this.$store.dispatch("send_new_message", message);

      this.message.content = "";
    },
  },
};
</script>
 
 <style>
</style>