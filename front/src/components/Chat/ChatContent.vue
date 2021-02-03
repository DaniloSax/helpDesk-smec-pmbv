 <template>
  <div
    :style="`height: ${height}; max-height: ${height}; max-width: 100%`"
    id="scroll-target"
    class="overflow-y-auto pa-0"
  >
    <img
      v-if="getcurrentMessages.length == 0"
      src="../../assets/images/no_data.png"
      height="98%"
      width="100%"
    />

    <v-row
      v-else
      v-for="(item, i) in getcurrentMessages"
      :key="item.id"
      class="pt-0"
    >
      <v-col
        class="'mr-2 d-flex"
        :class="[
          i === 0 ? 'pt-3' : 'pa-0 pl-3 pr-3',
          item.from === auth.id ? 'justify-end' : 'justify-start',
        ]"
      >
        <v-alert
          dense
          :color="item.from === auth.id ? 'info' : 'blue-grey lighten-4'"
          max-width="70%"
          :value="true"
          rounded="xl"
          :class="item.from === auth.id ? 'rounded-br-0' : 'rounded-bl-0 '"
        >
          <!-- content -->
          <div class="text-justify">
            <p>{{ findUser(item.from).name }}:</p>
            {{ item.content }}
            <!-- timestamp -->
            <div class="subtitle-2 font-weight-light text-right">
              {{ formatDate(item.created_at) }}
            </div>
          </div>
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>
 
 <script>
import { mapGetters } from "vuex";
import localforage from "localforage";
import moment from "moment";

export default {
  props: {
    height: { type: String, required: false, default: "450px" },
  },
  mounted() {
    localforage.getItem("helpDesk").then((item) => {
      this.auth = item.login.auth;
    });
  },
  data() {
    return {
      auth: {},
    };
  },
  computed: {
    ...mapGetters(["getcurrentMessages", "getSendMessage"]),
  },

  watch: {
    getSendMessage() {
      this.scrollToEnd();
    },
  },

  methods: {
    formatDate(date) {
      moment.locale("pt-br");
      return moment(date).format("L LTS");
    },

    scrollToEnd() {
      const doc = document.querySelector("#scroll-target ");
      doc.scrollTop = doc.scrollHeight;
    },

    findUser(id) {
      return this.$store.getters.users.find((user) => user.id === id);
    },
  },
};
</script>
 
 <style>
</style>