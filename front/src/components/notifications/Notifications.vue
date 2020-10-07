 <template>
  <div>
    <v-subheader>Notificações</v-subheader>
    <v-list>
      <div v-for="(notify, i) in notifications" :key="i">
        <template v-if="i <= 1">
          <v-list-item two-line @click="editCall(notify)">
            <v-list-item-icon>
              <v-icon color="blue" medium>mdi-face-agent</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                >Chamado nº: {{ notify ? notify.data.call_id : "" }} Nome:
                {{ notify ? notify.data.call_name : "" }}</v-list-item-title
              >
              <v-list-item-subtitle
                >Criado por:
                {{
                  notify ? notify.data.created_by.name : ""
                }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </template>
      </div>

      <template v-if="notifications.length > 1">
        <NotificationsDialog
          :notifications="notifications"
          @editNotify="editCall($event)"
          @markReadAll="markReadAll()"
        />
      </template>
    </v-list>
  </div>
</template>
 
 <script>
import { mapGetters } from "vuex";
import NotificationsDialog from "./NotificationsDialog";

export default {
  created() {
    this.$store.dispatch("allNotifications");
  },
  data() {
    return {
      settings: [],
    };
  },
  components: {
    NotificationsDialog,
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
          this.$router.replace({
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