 <template>
  <div class="d-flex align-baseline blue-grey lighten-3" >
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

  methods: {
    getEmoji(event) {
      this.message.content = this.message.content + event.native;
    },

    send() {
      const message = {
        participantId: 3,
        content: this.message.content,
        timestamp: {
          year: 2019,
          month: 3,
          day: 5,
          hour: 20,
          minute: 10,
          second: 3,
          millisecond: 123,
        },
      };
      if (this.message.content) {
        this.$emit("push-message", message);
        this.message.content = "";
      }
    },
  },
};
</script>
 
 <style>
</style>