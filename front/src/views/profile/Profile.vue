 <template>
  <card-default color="teal">
    <template v-slot:card-icon>
      <v-icon x-large>mdi-account</v-icon>
    </template>

    <template v-slot:card-title>Meu Perfil</template>

    <template v-slot:card-body>
      <v-skeleton-loader v-if="ridingComponent" :loading="true" class="mx-auto" type="article" tile></v-skeleton-loader>
      <validation-observer v-else v-slot="{invalid}">
        <ToastMsg @closeToast="clearMsg($event)" :msg="msg" />

        <AlertMsg v-if="msg.errors || msg.success" :msg="msg" />

        <v-form>
          <v-col cols="12">
            <!-- <v-chip class=""> -->
              <span class=" d-flex justify-center">
                <h1 class="mb-2">{{ auth.name }} -</h1>
                <h2 v-for="(role, i) in authRoles" :key="i">{{ role.toUpperCase() }}/</h2>
              </span>
            <!-- </v-chip> -->

            <v-row class="d-flex align-end">
              <v-col cols="2">
                <v-subheader class="d-flex justify-center">Foto de Perfil</v-subheader>
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <a @click.prevent="show=true">
                    <v-card :elevation="hover ? 16 : 2" tile height="200" width="100%">
                      <v-img :src="photo" height="100%" width="100%"></v-img>
                    </v-card>
                  </a>
                </v-hover>
                <vue-image-crop-upload v-model="show" @crop-success="cropSuccess" langType="pt-br" />
              </v-col>

              <v-col>
                <validation-provider rules="required" v-slot="{errors}">
                  <v-text-field
                    label="Nome do usuário"
                    type="text"
                    v-model="auth.name"
                    :error-messages="errors[0]"
                    clearable
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider rules="required" v-slot="{errors}">
                  <v-text-field
                    label="Nome Completo"
                    v-model="auth.profile.full_name"
                    :error-messages="errors[0]"
                    clearable
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <validation-provider rules="required|email" v-slot="{errors}">
                  <v-text-field
                    label="Email"
                    type="text"
                    v-model="auth.email"
                    :error-messages="errors[0]"
                    clearable
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider rules="required" v-slot="{errors}">
                  <v-text-field
                    label="Setor de Origem"
                    v-model="auth.profile.school"
                    :error-messages="errors[0]"
                    clearable
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider rules="required" v-slot="{errors}">
                  <v-text-field
                    label="Cargo"
                    v-model="auth.profile.office"
                    :error-messages="errors[0]"
                    clearable
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <ExpansablePassword @auth-password="getPassword($event)"></ExpansablePassword>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-btn
                color="primary"
                @click="updateProfile"
                :loading="loading"
                :disabled="invalid"
              >Salvar</v-btn>
            </v-row>
          </v-col>
        </v-form>
      </validation-observer>
    </template>
  </card-default>
</template>
 
 <script>
import localforage from "localforage";
import GlobalMixins from "@/mixins/globalMixins";

import { ValidationProvider, ValidationObserver } from "vee-validate";

import CardDefault from "@/components/Card";
import VueImageCropUpload from "vue-image-crop-upload";
import ExpansablePassword from "./components/ExpansablePassword";
import AlertMsg from "../../components/AlertMsg";
import ToastMsg from "../../components/ToastMsg";

export default {
  created() {
    this.ridingComponent = true;
    localforage.getItem("helpDesk").then((data) => {
      this.auth = data.login.auth;
      this.ridingComponent = false;
      if (data.login.auth.profile.photo) {
        this.photo = this.baseURL + data.login.auth.profile.photo;
      }
    });
  },
  data() {
    return {
      auth: null,
      loading: false,
      roles: [],
      ridingComponent: false,
      show: false,
      photo: null,
      baseURL: "http://localhost:8000/storage/",
      file: "",
    };
  },
  components: {
    CardDefault,
    ValidationProvider,
    ValidationObserver,
    VueImageCropUpload,
    ExpansablePassword,
    AlertMsg,
    ToastMsg,
  },
  mixins: [GlobalMixins],
  computed: {
    authRoles() {
      return this.auth.roles.map((role) => role.name);
    },
  },
  methods: {
    cropSuccess(imageDataUrl) {
      this.photo = imageDataUrl;
    },
    convertToImage(img) {
      fetch(img)
        .then((resp) => resp.blob())
        .then((blob) => {
          this.auth.file = new File([blob], "imagePerfil", {
            type: "image/png",
          });
        });
    },
    updateProfile() {
      this.loading = true;
      this.$store
        .dispatch("updateUserProfile", this.auth)
        .then(() => {
          this.$store.dispatch("getAuth");
          if (this.auth.file) {
            this.$store
              .dispatch("updatePhotoProfile", this.auth.file)
              .then(() => {
                this.$store.dispatch("getAuth");
                this.getMsgSuccess(true);
              });
          }
          this.getMsgSuccess(true);
          this.loading = false;

          // setTimeout(() => {
          //   window.location.reload();
          // }, 1000);
        })
        .catch((error) => {
          console.log("erro no component", error);
          this.getMsgError(error);
          this.loading = false;
        });
    },
    getPassword(event) {
      this.auth.password = event.password;
      this.auth.password_confirmation = event.password_confirmation;
    },
  },
  watch: {
    photo(newQuestion) {
      if (newQuestion) {
        this.convertToImage(newQuestion);
      }
    },
  },
};
</script>
 
 <style>
</style>