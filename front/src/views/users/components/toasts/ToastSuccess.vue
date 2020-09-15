<template>
  <v-snackbar :value="toastActive" timeout="5000" right bottom height="900" color="success"  :vertical="true">
    <strong>Editção de Usuário</strong>
    <p>Usuário editado com sucesso!</p>

    <template v-slot:action="{ attrs }">
      <v-btn icon color="white" @click="toastSuccessDisabled()" v-bind="attrs">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>

  </v-snackbar>
</template>

<script>
export default {
  name: "toast-success",
  props: ["toastActive"],
  methods: {
    toastSuccessDisabled() {
      return this.$emit("toastSuccessDisabled", false);
    }
  }
};
</script>

<style>
</style>