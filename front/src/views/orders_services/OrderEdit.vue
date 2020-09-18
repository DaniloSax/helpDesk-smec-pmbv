 <template>
  <div>
    <card-default color="primary">
      <template v-slot:card-icon>
        <v-icon x-large class="mr-2">mdi-face-agent</v-icon>
      </template>

      <template v-slot:card-title>{{ call ? call.name : '' }}</template>

      <template v-slot:card-title-center>Editar Chamado</template>

      <template v-slot:card-btn-back>
        <v-btn icon color="white">
          <router-link tag="a" :to="{name: 'calls'}">
            <v-icon color="white" x-large>mdi-arrow-left</v-icon>
          </router-link>
        </v-btn>
      </template>

      <template v-slot:card-body>
        <template v-if="!newCall">
          <v-skeleton-loader :loading="true" class="mx-auto" type="article" tile></v-skeleton-loader>
          <v-skeleton-loader :loading="true" class="mx-auto" type="article" tile></v-skeleton-loader>
          <v-skeleton-loader :loading="true" class="mx-auto" type="article" tile></v-skeleton-loader>
        </template>

        <template v-else>
          <ToastMsg :msg="msg" />

          <form-edit @call="getInputs($event)" :call="call" :services="services" />

          <image-upload :call_id="call.id" />
          <v-divider class="mt-4"></v-divider>

          <v-row v-if="images" justify="center">
            <v-carousel show-arrows-on-hover>
              <v-carousel-item
                v-for="(item,i) in images"
                :key="i"
                :src="baseURL+item.path"
                reverse-transition="fade-transition"
                transition="fade-transition"
                :append="true"
                :href="baseURL+item.path"
                target="_blanck"
              ></v-carousel-item>
            </v-carousel>
          </v-row>

          <v-divider class="mt-4"></v-divider>
          <v-row justify="center">
            <expansion-responses>
              <InputDinamic :responses="responses" :call_id="call.id" />
            </expansion-responses>
          </v-row>

          <v-divider class="mb-4"></v-divider>
          <v-row>
            <v-col cols="6">
              <dialog-delete-all @deleteCall="deleteCall"></dialog-delete-all>
            </v-col>
            <v-col cols="6">
              <v-btn block color="success" @click="updateCall()" :loading="loading">Salvar</v-btn>
            </v-col>
          </v-row>
        </template>
      </template>
    </card-default>
  </div>
</template>
 
 <script>
import CardDefault from "@/components/Card";
import FormEdit from "./components/forms/FormEdit";
import imageUpload from "./components/ImagesUploads";
import InputDinamic from "./components/InputDinamic";
import ExpansionResponses from "./components/expansion/ExpansionResponses";
import DialogDeleteAll from "./components/dialogs/DialogDeleteAll";

import GlobalMixins from "@/mixins/globalMixins";
import ToastMsg from "../../components/ToastMsg";

export default {
  created() {
    this.$store.dispatch("loadCalls").then(() => {
      this.$store.dispatch("loadImagesCall", this.id).then((items) => {
        this.$store.dispatch("loadResponses", this.id).then((responses) => {
          this.responses = responses ? responses : "";
          this.images = items != "" ? items : null;
          this.newCall = this.call;

          console.log("images", this.images);
        });
      });
    });
  },
  props: ["id"],
  data() {
    return {
      newCall: null,
      images: [],
      // baseURL: "http://localhost:8000/storage/",
      baseURL: "http://192.168.8.81:8008/storage/",
      responses: null,
      loading: false,
    };
  },
  mixins: [GlobalMixins],
  components: {
    CardDefault,
    FormEdit,
    imageUpload,
    InputDinamic,
    ExpansionResponses,
    DialogDeleteAll,
    ToastMsg,
  },
  computed: {
    call() {
      return this.$store.getters.callsById(this.id);
    },
    services() {
      return this.$store.getters.services;
    },
  },
  methods: {
    getInputs(event) {
      this.newCall = event;
    },
    updateCall() {
      console.log("update call");
      this.loading = true;
      this.$store
        .dispatch("updateCall", this.newCall)
        .then(() => {
          this.getMsgSuccess(true);
          return (this.loading = false);
        })
        .catch((error) => {
          console.log(error);
          this.getMsgError(error);
          return (this.loading = false);
        });
    },
    deleteCall() {
      this.$store.dispatch("deleteCall", this.id).then(() => {
        return this.$router.replace("/calls");
      });
    },
  },
};
</script>
 
 <style>
</style>