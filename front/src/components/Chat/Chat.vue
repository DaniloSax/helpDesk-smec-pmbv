 <template>
  <!-- <v-sheet color="white" elevation="1" height="100%" width="100%"> -->
  <div>
    <v-row class="blue-grey lighten-5">
      <!-- users -->
      <!-- <v-col>
      <v-list>
        <v-list-item v-for="user in users" :key="user.id" @click="() => {}">{{
          user.name
        }}</v-list-item>
      </v-list>
    </v-col> -->

      <v-col class="d-flex flex-column justify-end">
        <!-- messages -->
        <v-virtual-scroll
          :items="messages"
          item-height="110%"
          height="350"
          max-height="200%"
          :bench="benched"
        >
          <template v-slot:default="{ item }">
            <!-- <div
              :ref="item.id"
              :key="item.id"
              class="d-flex"
              :class="
                item.participantId === 3 ? 'justify-end' : 'justify-start'
              "
            > -->
              <v-alert
              :key="item.id"
                :color="
                  item.participantId === 3
                    ? 'primary white--text'
                    : 'blue-grey lighten-4'
                "
                :value="true"
                max-width="100%"
                class="rounded-pill ma-3 text-left"
                :class="
                  item.participantId === 3 ? 'rounded-br-0' : 'rounded-bl-0'
                "
              >
                <!-- content -->
                <!-- <div class="ml-4"> -->
                  {{ item.content }}
                <!-- </div> -->
                <!-- timestamp -->
                <div class="subtitle-2 font-weight-light text-right">
                  {{ item.timestamp.day }}/{{ item.timestamp.month }}/{{
                    item.timestamp.year
                  }}
                  {{ item.timestamp.hour }}:{{ item.timestamp.minute }}H
                </div>
              </v-alert>
            <!-- </div> -->
          </template>
        </v-virtual-scroll>

        <!-- send -->
      </v-col>
    </v-row>
    <v-row class="blue-grey lighten-3">
      <v-col>
        <ChatFooter @push-message="send($event)" />
      </v-col>
    </v-row>
  </div>
  <!-- </v-sheet> -->
</template>
 
 <script>
// import ChatEmojis from "./ChatEmojis";
import ChatFooter from "./ChatFooter";

export default {
  components: { ChatFooter },
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
            "minha mensagem sendo enviada",
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
          
          content: "Mensagem 1 sendo carregado na lista de mensagens. testando conteudo longo ... testando mais espaços",
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
          participantId: 1,
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
          participantId: 3,
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
          participantId: 1,
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
          participantId: 3,
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
    };
  },
  methods: {
    send(event) {
      this.messages.push(event);
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