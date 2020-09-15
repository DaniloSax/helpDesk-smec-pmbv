 <template>
  <card-default color="light-blue">
    <template v-slot:card-icon>
      <v-icon x-large>mdi-playlist-plus</v-icon>
    </template>

    <template v-slot:card-title>Registrar Usuário</template>

    <template v-slot:card-btn-back>
      <v-btn icon color="white" :to="{name:'users'}">
        <v-icon x-large>mdi-arrow-left</v-icon>
      </v-btn>
    </template>

    <template v-slot:card-body>

      <ToastMsg @closeToast="clearMsg($event)" :msg="msg" />
      <AlertMsg v-if="msg.errors || msg.success" :msg="msg" />

      <form-create :loading="loading" @submit="storeUser" />

    </template>
  </card-default>
</template>
 
 <script>
import FormCreate from "./components/forms/FormCreate";
import CardDefault from "@/components/Card";
import AlertMsg from "../../components/AlertMsg";
import ToastMsg from "../../components/ToastMsg";

import GlobalMixin from '../../mixins/globalMixins'

export default {
  data() {
    return {
      user: {},
      loading: false,
    };
  },
  components: {
    FormCreate,
    CardDefault,
    AlertMsg,
    ToastMsg,
  },
  mixins: [GlobalMixin],
  methods: {
    storeUser(event) {
      this.loading = true;
      this.$store
        .dispatch("storeUser", event)
        .then((user) => {
          this.loading = false;
          return this.$router.replace({
            name: "usersEdit",
            params: { id: user.id },
          });
        })
        .catch((error) => {
          console.log(error);
          this.getMsgError(error)
          this.loading = false;
        });
    },
  },
  computed: {
    errors() {
      return this.$store.getters.errorsUser;
    },
  },
};
</script>
 
 <style>
</style>