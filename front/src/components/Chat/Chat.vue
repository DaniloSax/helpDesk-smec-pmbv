 <template>
  <!-- <v-sheet color="white" elevation="1" height="100%" width="100%"> -->
  <v-row>
    <!-- users -->
    <!-- <v-col>
        <v-list>
          <v-list-item v-for="user in users" :key="user.id" @click="() => {}">{{
            user.name
          }}</v-list-item>
        </v-list>
      </v-col>

      <v-divider vertical></v-divider> -->

    <v-col class="d-flex flex-column justify-end">
      <!-- messages -->
      <div class="blue-grey lighten-5" ref="containerMessages">
        <v-virtual-scroll
          max-height="300"
          :items="messages"
          :item-height="80"
          :bench="benched"
        >
          <template v-slot:default="{ item }">
            <!-- <div v-for="(message, index) in messages" :key="index"> -->
            <div
              :ref="item.id"
              :key="item.id"
              class="d-flex"
              :class="
                item.participantId === 3 ? 'justify-end' : 'justify-start'
              "
            >
              <v-alert
                :color="
                  item.participantId === 3
                    ? 'primary white--text'
                    : 'blue-grey lighten-4'
                "
                :value="true"
                width="30%"
                class="rounded-pill ma-3"
                :class="
                  item.participantId === 3 ? 'rounded-br-0' : 'rounded-bl-0'
                "
              >
                <!-- content -->
                {{ item.content }}
                <!-- timestamp -->
                <div class="subtitle-2 font-weight-light text-right">
                  {{ item.timestamp.day }}/{{ item.timestamp.month }}/{{
                    item.timestamp.year
                  }}
                  {{ item.timestamp.hour }}:{{ item.timestamp.minute }}H
                </div>
              </v-alert>
            </div>
            <!-- </div> -->
          </template>
        </v-virtual-scroll>
      </div>

      <!-- send -->
      <v-footer class="d-flex align-baseline blue-grey lighten-3" height="70%">
        <Emojis @input-emoji="getEmoji" />

        <v-text-field
          background-color="blue-grey lighten-4"
          label="Digite uma mensagem"
          v-model="message.content"
          filled
          dense
          rounded
          solo
          clearable
        >
          <template v-slot:append-outer>
            <v-icon
              medium
              color="primary"
              @click="send()"
              @keyup.enter="send()"
              :disabled="!message.content"
            >
              mdi-send
            </v-icon>
          </template>
        </v-text-field>
      </v-footer>
    </v-col>
  </v-row>
  <!-- </v-sheet> -->
</template>
 
 <script>
import Emojis from "./Emojis";

export default {
  components: { Emojis },
  data() {
    return {
      benched: 2,
      users: [
        {
          name: "Arnaldo",
          id: 1,
        },
        {
          name: "José",
          id: 2,
        },
      ],
      messages: [
        {
          content:
            "Mensagem 1 sendo carregado na lista de mensagens. testando conteudo longo ...",
          myself: false,
          participantId: 1,
          timestamp: {
            year: 2019,
            month: 3,
            day: 5,
            hour: 20,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: "minha mensagem sendo enviada",
          myself: true,
          participantId: 3,
          timestamp: {
            year: 2019,
            month: 4,
            day: 5,
            hour: 19,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: "outra mensagem",
          myself: false,
          participantId: 2,
          timestamp: {
            year: 2019,
            month: 5,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: "outra mensagem",
          myself: false,
          participantId: 2,
          timestamp: {
            year: 2019,
            month: 5,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: "outra mensagem",
          myself: false,
          participantId: 2,
          timestamp: {
            year: 2019,
            month: 5,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
      ],
      message: {
        content: "",
      },
    };
  },
  methods: {
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
        this.messages.push(message);
        this.message.content = "";
      }
      this.onScroll();
    },

    getEmoji(event) {
      this.message.content = this.message.content + event.native;
    },
    onScroll() {
      const content = this.$refs.containerMessages;
      console.log(content);
      // content.scrollTop = content.scrollTo(999);
    },
  },
};
</script>
 
 <style>
.line-message {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 62px;
  margin-bottom: 0%;
  background-color: #c0c0c0;
  user-select: text;
}
</style>