 <template>
  <v-virtual-scroll
    :bench="0"
    :items="messages"
    :item-height="$vuetify.breakpoint.mobile ? '100' : '110'"
    height="400"
    max-height="200%"
  >
    <template v-slot:default="{ item }">
      <v-alert
        :color="
          item.participantId === 3
            ? 'primary white--text'
            : 'blue-grey lighten-4'
        "
        max-width="100%"
        :value="true"
        class="rounded-pill ma-3 text-left"
        :class="item.participantId === 3 ? 'rounded-br-0' : 'rounded-bl-0'"
      >
        <!-- content -->
        <div class="pa-2">
          {{ item.content }}
          <!-- timestamp -->
          <div class="subtitle-2 font-weight-light text-right">
            {{ item.timestamp.day }}/{{ item.timestamp.month }}/{{
              item.timestamp.year
            }}
            {{ item.timestamp.hour }}:{{ item.timestamp.minute }}H
          </div>
        </div>
      </v-alert>
    </template>
  </v-virtual-scroll>
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
          content: "minha mensagem sendo enviada",
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
          content:
            "Mensagem 1 sendo carregado na lista de mensagens. testando conteudo longo ... testando mais espaços",
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
};
</script>
 
 <style>
</style>