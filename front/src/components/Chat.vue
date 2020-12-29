 <template>
  <v-sheet color="white" elevation="1" height="100%" width="100%">
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

      <v-col class="d-flex flex-column">
        <!-- messages -->
        <div class="ma-2 blue-grey lighten-5">
          <div v-for="(message, index) in messages" :key="index">
            <div
              class="d-flex"
              :class="
                message.participantId === 3 ? 'justify-end' : 'justify-start'
              "
            >
              <v-alert
                :type="
                  message.participantId === 3
                    ? 'primary'
                    : 'blue-grey lighten-2'
                "
                :value="true"
                width="30%"
                class="rounded-pill ma-3"
                :class="
                  message.participantId === 3 ? 'rounded-br-0' : 'rounded-bl-0'
                "
              >
                <!-- content -->
                {{ message.content }}
                <!-- timestamp -->
                <div class="subtitle-2 font-weight-thin text-right">
                  {{ message.timestamp.day }}/{{ message.timestamp.month }}/{{
                    message.timestamp.year
                  }}
                  {{ message.timestamp.hour }}:{{ message.timestamp.minute }}H
                </div>
              </v-alert>
            </div>
          </div>
        </div>

        <!-- send -->
        <v-col>
          <v-text-field
            label="Digite uma mensagem"
            v-model="message.content"
            clearable
          >
            <template v-slot:append-outer>
              <v-btn icon color="primary" @click="send()">
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-col>
    </v-row>
  </v-sheet>
</template>
 
 <script>
export default {
  data() {
    return {
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
      ],
      message: {},
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

      this.messages.push(message);
      this.message.content = "";
    },
  },
};
</script>
 
 <style>
</style>