 <template>
  <div>
    <v-subheader>Notificações</v-subheader>
    <v-list v-for="(notify, i) in notifications" :key="i">
      <v-list-item two-line @click="editCall(notify)">
        <v-list-item-icon>
          <v-icon color="blue" medium>mdi-bell</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Chamado nº: {{ notify ? notify.data.call_id : '' }} Nome: {{ notify ? notify.data.call_name : ''}}</v-list-item-title>
          <v-list-item-subtitle>Criado por: {{ notify ? notify.data.created_by.name : ''}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list>
      <v-list-item @click="markReadAll()">
        <v-list-item-icon>
          <v-icon color="success">mdi-check-box-multiple-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Marcar todas como lidas</v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
 
 <script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("allNotifications");
  },
  data() {
    return {
      settings: [],
    };
  },
  computed: {
    ...mapGetters(["notifications"]),
  },
  methods: {
    markReadAll() {
      this.$store.dispatch("markReadAll");
    },

    editCall(notify) {
      this.$store
        .dispatch("readNotifyCall", notify)
        .then(() => {
          this.$router.push({
            name: "callsEdit",
            params: { id: notify.data.call_id },
          });
        })
        .catch(() => {
          this.$store.dispatch("readNotifyCall", notify).then(() => {
            this.$router.push({
              name: "callsEdit",
              params: { id: notify.data.call_id },
            });
          });
        });
    },
  },
};
</script>
 
 <style>
</style>