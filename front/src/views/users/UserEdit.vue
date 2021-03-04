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

import GlobalMixin from "../../mixins/globalMixins";
import ToastMixin from '../../mixins/Toast'

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
  },
  mixins: [GlobalMixin, ToastMixin],
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
         this.toastSuccess('Usuário atualizado com sucesso!')

          this.$store.dispatch("getAuth");
        })
        .catch((error) => {
          this.loading = false;
           this.toastSuccess('Ocorreu um erro ' + error)
        });
    },

    deleteUser(event) {
      console.log("delete user", event);
    },
  },
};
</script>
 
