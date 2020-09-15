<template>
  <span>
    <v-btn
      v-if="$route.name == 'usersEdit'"
      block
      class="white--text"
      color="red"
      @click.stop="dialog = true"
      :loading="loading"
    >Excluir</v-btn>

    <v-btn v-else icon color="red" @click.stop="dialog = true" :loading="loading">
      <v-icon>mdi-delete</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline d-flex justify-center">Excluir Usuário</v-card-title>

        <v-card-text class="d-flex justify-center">Tem certeza disso?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary darken-1" text @click="dialog = false">Não</v-btn>

          <v-btn color="red darken-1" text @click="dialog = false; deleteUser(user_id)">Sim</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
export default {
  props: ["user_id"],
  data() {
    return {
      dialog: false,
      loading: false,
    };
  },
  methods: {
    deleteUser(user_id) {
      console.log("delete user", user_id);
      this.loading = true;
      this.$emit("ladingTable", true);
      this.$store
        .dispatch("deleteUser", user_id)
        .then(() => {
          this.loading = false;
          this.$emit("ladingTable", false);

          this.$emit("msgSuccess", true);

          if (this.$route.name == "usersEdit") {
            this.$router.replace("/users");
          }
        })
        .catch((error) => {
          this.loading = false;
          this.$emit("ladingTable", false);
          console.log(error);
          return this.$emit("msgError", ["mensagem de error", "teste"]);
        });
    },
  },
};
</script>

<style>
</style>