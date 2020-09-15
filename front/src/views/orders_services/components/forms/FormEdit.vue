<template>
  <v-form>
    <v-row>
      <v-col cols="2">
        <v-text-field
          name="name"
          label="Criado por:"
          :value="created_by ? created_by.name : ''"
          readonly
          filled
          shaped
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <validation-provider rules v-slot="{ errors }">
          <v-autocomplete
            :items="services"
            :disabled="!isAdmin"
            item-text="name"
            item-value="id"
            v-model="service_id"
            label="Escolha o Serviço"
            :error-messages="errors"
            clearable
          ></v-autocomplete>
        </validation-provider>
      </v-col>

      <v-col cols="4">
        <validation-provider rules="required" v-slot="{ errors }">
          <v-text-field
            label="Nome"
            v-model="callLocal.name"
            :error-messages="errors[0]"
            readonly
            @input="$emit('call', callLocal)"
          />
        </validation-provider>
      </v-col>
      <v-col :cols="disabled ? 3 : 2">
        <validation-provider rules="required" v-slot="{errors, valid}">
          <v-select
            :items="prioritys"
            v-model="callLocal.priority"
            label="Prioridade"
            :error-messages="errors[0]"
            :success="valid"
            readonly
            @input="$emit('call', callLocal)"
          ></v-select>
        </validation-provider>
      </v-col>
      <v-col :cols="disabled ? 3 : 2">
        <!-- LEMBRETE -> can: admin|solucionador|direcionador -->
        <validation-provider rules="required" v-slot="{errors}">
          <v-select
            class="text-uppercase"
            :items="status"
            v-model="callLocal.statu"
            :disabled="!isAdmin && !isSolver"
            label="Status"
            :error-messages="errors[0]"
            @input="$emit('call', callLocal)"
          ></v-select>
        </validation-provider>
      </v-col>
      <v-col cols="2">
        <validation-provider rules v-slot="{ errors }">
          <v-autocomplete
            :items="solvers"
            v-model="solver"
            @input="updateSolver(solver)"
            :readonly="!isAdmin"
            item-text="name"
            item-value="id"
            label="Solucionador"
            :loading="loading"
            :error-messages="errors[0]"
            :clearable="isAdmin"
          ></v-autocomplete>
        </validation-provider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <v-text-field
            label="Origem"
            :value="created_by.profile.school"
            :error-messages="errors[0]"
            :success="valid"
            disabled
            @input="$emit('call', callLocal)"
          />
        </validation-provider>
      </v-col>

      <v-col cols="3">
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <v-text-field
            label="Destino"
            v-model="callLocal.destiny"
            :error-messages="errors[0]"
            :success="valid"
            readonly
            @input="$emit('call', callLocal)"
          />
        </validation-provider>
      </v-col>
      <v-col cols="3">
        <validation-provider rules="required" v-slot="{ errors }">
          <v-select
            :items="initials"
            v-model="callLocal.initials"
            class="text-uppercase"
            label="Sigla"
            :error-messages="errors[0]"
            readonly
            @input="$emit('call', callLocal)"
          ></v-select>
        </validation-provider>
      </v-col>
      <v-col cols="2">
        <validation-provider name="assunto" rules="required" v-slot="{ errors, valid }">
          <v-text-field
            label="Prazo contagem em dias"
            type="number"
            v-model="callLocal.term"
            :error-messages="errors[0]"
            :success="valid"
            readonly
            @input="$emit('call', callLocal)"
          />
        </validation-provider>
      </v-col>
    </v-row>
    <validation-provider name="descricao" rules="required" v-slot="{ errors, valid }">
      <v-textarea
        clearable
        auto-grow
        outlined
        label="Descrição"
        v-model="callLocal.description"
        :error-messages="errors[0]"
        :success="valid"
        @input="$emit('call', callLocal)"
      />
    </validation-provider>
  </v-form>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import localforage from "localforage";
import AccessControllerMixins from "@/mixins/AcessControllerMixins";

export default {
  created() {
    localforage.getItem("helpDesk").then((value) => {
      this.callLocal = this.call;
      this.$store.dispatch("loadUsers").then(() => {
        this.$store.dispatch("loadServices");
        this.$store.dispatch("loadSolver", this.call.id).then((item) => {
          this.solver = item;
          console.log("solver", this.solver);
          return (this.auth = value.login.auth);
        });
      });
    });
  },
  props: ["call", "services"],
  data() {
    return {
      status: [
        "a iniciar",
        "concluído",
        "andamento",
        "atrasado",
        "cancelado",
        "paralisado",
      ],
      prioritys: ["Urgente", "Alta", "Média", "Baixa"],
      initials: ["SMEC", "SMAG", "SMO"],
      service_id: "",
      callLocal: {},
      auth: {},
      disabled: false,
      solver: null,
      loading: false,
    };
  },
  mixins: [AccessControllerMixins],
  components: { ValidationProvider },
  computed: {
    user() {
      return this.$store.getters.usersById(this.auth.id);
    },
    service() {
      return this.services.find((sv) => sv.id == this.service_id) || "";
    },
    solvers() {
      const solvers = this.$store.getters.users.filter((user) => {
        const roleSolvers = user.roles.filter((role) => {
          return role.name == "solucionador";
        });
        const user_id = roleSolvers.map((solver) => {
          return solver.pivot.model_id;
        });

        return user.id == user_id;
      });

      return solvers;
    },
    created_by() {
      return this.$store.getters.usersById(this.call.created_by);
    },
  },
  watch: {
    service() {
      this.callLocal = this.service;
    },
  },
  methods: {
    dispatchSolver(solver) {
      this.loading = true;

      this.$store.dispatch("updateSolverCall", solver).then(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
    },

    updateSolver(user_id) {
      const solver = {
        user_id,
        call_id: this.call.id,
      };

      if (!solver.user_id) {
        solver.user_id = null;
        this.callLocal.statu = "a iniciar";
        this.$store.dispatch("updateCall", this.callLocal);
        this.dispatchSolver(solver);
      } else {
        this.callLocal.statu = "andamento";
        this.$store.dispatch("updateCall", this.callLocal);
        this.dispatchSolver(solver);
      }
    },
  },
};
</script>

<style>
</style>