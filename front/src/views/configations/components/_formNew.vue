<template>
  <v-form>
    <v-row>
      <v-col cols="6">
        <ValidationProvider>
          <v-text-field label="Nome" v-model="service.name" @input="$emit('service', service)"></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="6">
        <ValidationProvider>
          <v-text-field
            label="Descrição"
            textarea
            v-model="service.description"
            @input="$emit('service', service)"
          ></v-text-field>
        </ValidationProvider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <ValidationProvider>
          <v-text-field
            label="Destino"
            v-model="service.destiny"
            @input="$emit('service', service)"
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="3">
        <ValidationProvider>
          <v-select :items="initials" v-model="service.initials" label="Sigla"></v-select>
        </ValidationProvider>
      </v-col>
      <v-col cols="3">
        <ValidationProvider>
          <v-select :items="prioritys" v-model="service.priority" label="Prioridades"></v-select>
        </ValidationProvider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <ValidationProvider>
          <v-text-field
            type="number"
            label="Prazo em dias"
            v-model="service.term"
            @input="$emit('service', service)"
          ></v-text-field>
        </ValidationProvider>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  data() {
    return {
      service: {},
      initials: ["SMAG", "SMO", "SMEC"],
      prioritys: ["Baixa", "Média", "Alta", "Urgente"],
    };
  },
  components: { ValidationProvider },
};
</script>

<style>
</style>