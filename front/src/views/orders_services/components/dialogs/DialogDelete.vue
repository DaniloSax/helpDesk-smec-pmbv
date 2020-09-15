<template>
  <div>
    <v-btn icon color="red" @click.stop="dialog = true" :loading="loading">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="550">
      <v-card>
        <v-card-title class="d-flex justify-center headline">Confirmação de Exclusão</v-card-title>

        <v-card-text>
          <v-list>
            <v-list-item @click="()=>{}">
              <v-list-item-title class="d-flex justify-center flex-wrap">
                <span>
                  <strong>Ordem número</strong>
                  {{ call.id }} &nbsp;-
                </span>
                <span>&nbsp;{{ call.assunto }}</span>
                <span>com destino {{ call.destiny }}</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="teal accent-4" text @click="dialog = false">Cancelar</v-btn>

          <v-btn color="red darken-1" text @click="deleteCall(call.id)">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["call"],
  data() {
    return {
      dialog: false,
      loading: false,
    };
  },
  methods: {
    deleteCall(id) {
      this.dialog = false;
      this.loading = true;
      this.$store
        .dispatch("deleteCall", id)
        .then(() => {
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>