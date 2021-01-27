 <template>
  <v-card max-height="100%" height="100%" min-height="500" dark color="primary" >
    <v-container>
      <strong>
        Entre com o número do chamado sobre o qual deseja tratar:
      </strong>
      <v-text-field
        clearable
        outlined
        rounded
        dense
        class="mt-4"
        min="0"
        type="number"
        v-model.number="numberCall"
        label="Digite o número do Chamado"
      ></v-text-field>
      <v-card-actions class="d-flex justify-end">
        <v-btn
          block
          rounded
          dark
          color="info"
          @click="validNumberCall"
          :loading="loading"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
 
 <script>
export default {
  data() {
    return {
      numberCall: null,
      loading: false,
    };
  },
  methods: {
    async validNumberCall() {
      this.loading = true;
      const calls = await this.$store.dispatch("loadCalls");
      const call = calls.find( call => call.id === this.numberCall)
      console.log(call)
      this.$emit("valid-chat", "");
      this.loading = false;
    },
  },
};
</script>
 
 <style>
</style>