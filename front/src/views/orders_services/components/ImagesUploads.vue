<template>
  <ValidationObserver v-slot="{ invalid }" class="row d-flex justify-space-around align-baseline">
    <v-col cols="11">
      <ValidationProvider rules="required">
        <v-file-input
          :disabled="call_statu === 'concluído'"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Anexar Imagens/Arquivos"
          prepend-icon="mdi-camera"
          v-model="images"
          multiple
        ></v-file-input>
      </ValidationProvider>
    </v-col>

    <v-btn
      small
      class="ml-2"
      color="primary"
      @click="onUpload"
      :loading="loading"
      :disabled="invalid"
      >CARREGAR</v-btn
    >
  </ValidationObserver>
</template>

<script>
import axios from "axios";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  props: {
    call_id: { type: Number, required: false },
    call_statu: { type: String, required: false },
  },
  data() {
    return {
      images: null,
      loading: false,
    };
  },
  components: { ValidationProvider, ValidationObserver },
  methods: {
    prepareFormData() {
      console.log("prepareFormData", this.images);

      let formData = new FormData();

      for (let index = 0; index < this.images.length; index++) {
        let image = this.images[index];
        formData.append("images[" + index + "]", image);
      }
      console.log(formData);

      return formData;
    },

    caseAddPlusImages() {
      if (this.call_id) {
        this.loading = true;
        axios
          .post(`images/${this.call_id}`, this.prepareFormData(), {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            this.loading = false;
            this.$store
              .dispatch("loadImagesCall", this.call_id)
              .then((items) => {
                this.images = items != "" ? items : null;
                console.log("images", this.images);
              });
          })
          .catch((e) => {
            console.log(e.response.data);
          });
      }
    },

    onUpload() {
      this.$emit("loading", { loading: true, dialog: false });

      if (this.call_id) {
        this.caseAddPlusImages();
      } else {
        axios
          .post("images", this.prepareFormData(), {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "multipart/form-data",
            },
          })
          .then((resp) => {
            this.$emit("loading", { loading: false, dialog: false });

            console.log("response route store image", resp.data);
            this.$router
              .push({
                name: "callsEdit",
                params: { id: resp.data.id },
              })
              .catch(() => {});
          })
          .catch((e) => {
            console.log(e.response.data);
          });
      }
    },
  },
};
</script>

<style>
</style>