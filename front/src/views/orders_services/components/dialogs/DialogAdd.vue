 <template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          block
          color="success"
          v-on="on"
          class="mt-4"
          height="40"
          @click.stop="dialog = true"
          :loading="loading"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Nova Ordem</span>
    </v-tooltip>

    <v-dialog v-model="dialog" max-width="2000">
      <v-card>
        <v-card-title class="d-flex justify-center headline">Nova Ordem de Serviço</v-card-title>
        <v-card-text>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step :complete="!!call" :editable="true" step="1">Formulário</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="step > 2"  step="2">Anxeos</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <form-create
                  :auth="auth"
                  @salvar="step= 2; storeCall()"
                  :services="services"
                  @call_event="getCall($event)"
                ></form-create>
              </v-stepper-content>

              <v-stepper-content step="2">
                <images-uploads @loading="loading = $event.loading; dialog = $event.dialog"></images-uploads>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
 
<script>
import FormCreate from "../forms/FormCreate";
import localforage from "localforage";
import ImagesUploads from "../ImagesUploads";

export default {
  created() {
    localforage.getItem("helpDesk").then((item) => {
      this.auth = item.login.auth;
      this.$store.dispatch("loadServices");
    });
  },
  components: { FormCreate, ImagesUploads },
  data() {
    return {
      dialog: false,
      auth: {},
      call: null,
      images: [],
      loading: false,
      step: 1,
      callSuccess: {},
    };
  },
  computed: {
    services() {
      return this.$store.getters.services;
    },
  },
  methods: {
    prepareData(value) {
      let call = {
        description: value.description,
        destiny: value.destiny,
        initials: value.initials,
        name: value.name,
        priority: value.priority,
        term: value.term,
        statu: "a iniciar",
      };
      return call;
    },
    storeCall() {
      this.loading = true;
      const call = this.prepareData(this.call);
      this.$store
        .dispatch("storeCall", call)
        .then(() => {
          this.loading = false;
        })
        .catch(() => (this.loading = false));
    },
    getCall(event) {
      this.call = event;
    },
    getUpload(event) {
      console.log(event);
      this.images.push(event);
    },
  },
};
</script>
 
 <style>
</style>