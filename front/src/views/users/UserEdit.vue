 <template>
  <div>
    <card-default color="light-blue">
      <template v-slot:card-icon>
        <v-icon x-large>mdi-account</v-icon>
      </template>

      <template v-slot:card-title>{{ user ? user.name : "" }}</template>

      <template v-slot:card-title-center>Editar Usuário</template>

      <template v-slot:card-btn-back>
        <v-btn icon color="white">
          <router-link tag="a" :to="{ name: 'users' }">
            <v-icon color="white" x-large>mdi-arrow-left</v-icon>
          </router-link>
        </v-btn>
      </template>

      <template v-slot:card-body>
        <ToastMsg @closeToast="clearMsg($event)" :msg="msg" />
        <AlertMsg v-if="msg.errors || msg.success" :msg="msg" />

        <form-edit
          :id="id"
          :loading="loading"
          @submitUpdate="submitUpdate"
          @deleteUser="deleteUser($event)"
        />
      </template>
    </card-default>
  </div>
</template>
 
 <script>
import CardDefault from "@/components/Card";
import FormEdit from "./components/forms/FormEdit";
import AlertMsg from "../../components/AlertMsg";
import ToastMsg from "../../components/ToastMsg";

import GlobalMixin from "../../mixins/globalMixins";

export default {
  props: ["id"],
  data() {
    return {
      loading: false,
    };
  },
  components: {
    FormEdit,
    CardDefault,
    AlertMsg,
    ToastMsg,
  },
  mixins: [GlobalMixin],
  computed: {
    user() {
      return this.$store.getters.usersById(this.id);
    },
  },
  methods: {
    submitUpdate(event) {
      this.loading = true;
      this.$store
        .dispatch("updateUser", event)
        .then(() => {
          this.loading = false;
          this.getMsgSuccess(true);

          this.$store.dispatch("getAuth");
        })
        .catch((error) => {
          this.loading = false;
          this.getMsgError(error);
          // this.toastActiveError = !this.toastActiveError;
          console.log(error);
        });
    },

    deleteUser(event) {
      console.log("delete user", event);
    },
  },
};
</script>
 
