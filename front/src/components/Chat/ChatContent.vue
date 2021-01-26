 <template>
  <!-- <v-virtual-scroll
    :bench="2"
    :items="getcurrentMessages"
    :item-height="$vuetify.breakpoint.mobile ? '100' : '110'"
    height="450"
    max-height="200%"
    tag="div"
    id="scroll-target"
  >
    <template v-slot:default="{ item }"> -->
  <!-- <v-card >
    <v-card-text > -->
  <!-- rounded-pill  -->
  <!-- :class="item.from === auth.id ? 'rounded-br-0' : 'rounded-bl-0'" -->
  <div style="max-height: 450px; max-width: 100%;" id="scroll-target" class="overflow-y-auto">
    <v-row v-for="item in getcurrentMessages" :key="item.id" class="">
      <v-col>
        <v-alert
        dense
          :color="item.from === auth.id ? 'info' : 'blue-grey lighten-4'"
          max-width="100%"
          :value="true"
          rounded="xl"
          class="text-left"
          :class="item.from === auth.id ? 'rounded-br-0' : 'rounded-bl-0'"
        >
          <!-- content -->
          <!-- pa-2 -->
          <div class="text-justify">
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
  <!-- </v-card-text>
  </v-card> -->

  <!-- </template>
  </v-virtual-scroll> -->
</template>
 
 <script>
import { mapGetters } from "vuex";
import localforage from "localforage";
import moment from "moment";

export default {
  mounted() {
    localforage.getItem("helpDesk").then((item) => {
      this.auth = item.login.auth;
      this.scrollToEnd();
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
  },
};
</script>
 
 <style>
</style>