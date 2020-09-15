 <template>
  <card-default color="teal">
    <template v-slot:card-icon>
      <v-icon x-large>mdi-account</v-icon>
    </template>

    <template v-slot:card-title>Meu Perfil</template>

    <template v-slot:card-body>
      <v-skeleton-loader v-if="ridingComponent" :loading="true" class="mx-auto" type="article" tile></v-skeleton-loader>

      <!-- <AlertMsg v-if="msg.errors || msg.success" :msg="msg" />
      <ToastMsg @closeToast="clearMsg($event)" :msg="msg" />-->

      <validation-observer v-else v-slot="{invalid}">
        <v-form>
          <v-col cols="12">
            <span class="d-flex justify-center">
              <h1 class="mb-2">{{ auth.name }} -</h1>
              <h2 v-for="(role, i) in authRoles" :key="i">{{ role.toUpperCase() }}/</h2>
            </span>

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
                    label="Escola de Origem"
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
              <v-col cols="6">
                <validation-provider rules="min:8" vid="confirmation" v-slot="{errors}">
                  <v-text-field
                    label="Nova senha"
                    type="password"
                    v-model.lazy="auth.password"
                    hint="Pelo menos 8 carácteres"
                    :error-messages="errors[0]"
                    clearable
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="6">
                <validation-provider rules="confirmed:confirmation" v-slot="{errors}">
                  <v-text-field
                    label="Confirme a nova senha"
                    type="password"
                    v-model.lazy="auth.password_confirmation"
                    :error-messages="errors[0]"
                    clearable
                  ></v-text-field>
                </validation-provider>
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

import { ValidationProvider, ValidationObserver } from "vee-validate";

import CardDefault from "@/components/Card";
import VueImageCropUpload from "vue-image-crop-upload";

export default {
  created() {
    this.ridingComponent = true;
    localforage.getItem("helpDesk").then((data) => {
      // this.$store.dispatch("loadRoles").then((roles) => {
        this.auth = data.login.auth;
          this.ridingComponent = false;
        // if (roles) {
        //   this.roles = roles;
        // }
      // });
    });
  },
  data() {
    return {
      auth: null,
      loading: false,
      roles: [],
      ridingComponent: false,
      show: false,
      photo: "",
      file: "",
    };
  },
  components: {
    CardDefault,
    ValidationProvider,
    ValidationObserver,
    VueImageCropUpload,
  },
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
      this.$store.dispatch("updateUserProfile", this.auth);
      this.loading = false;
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