<template>
  <v-data-iterator
    :items="calls"
    :items-per-page.sync="itemsPerPage"
    :page="page"
    :search="search"
    no-data-text="Nenhum registro encontrado"
    hide-default-footer
  >
    <template v-slot:header class="d-flex">
      <v-text-field
        v-model="search"
        clearable
        flat
        solo-inverted
        hide-details
        label="Buscar"
      ></v-text-field>

      <dialog-add />
    </template>

    <template v-slot:default="props">
      <v-row>
        <v-col v-for="(item, i) in props.items" :key="i" cols="12">
          <v-progress-circular
            color="purple"
            v-if="loading"
            indeterminate
          ></v-progress-circular>

          <OrderService v-else :call="item" :user_id="item.created_by" />
        </v-col>
      </v-row>
    </template>

    <template v-slot:footer>
      <v-row class="mt-2" align="center">
        <span class="grey--text">Itens por Página</span>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark text color="primary" class="ml-2" v-on="on">
              {{ itemsPerPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(number, index) in itemsPerPageArray"
              :key="index"
              @click="updateItemsPerPage(number)"
            >
              <v-list-item-title>{{ number }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <span class="mr-4 grey--text"
          >Página {{ page }} de {{ numberOfPages }}</span
        >
        <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
// import orders from "./data/orders";

import OrderService from "./components/OrderService";
import DialogAdd from "./components/dialogs/DialogAdd";

export default {
  created() {
    this.$store.dispatch("loadCalls").then(() => {
      this.$store.dispatch("allNotifications");
      this.$store.dispatch("loadUsers");
      this.loading = false;
    });
  },
  data() {
    return {
      search: "",
      loading: true,
      // itemsPerPage: 2,
      // page: 1,
      itemsPerPageArray: [1, 2, 4, 8, 12],
    };
  },
  components: { OrderService, DialogAdd },
  computed: {
    calls() {
      return this.$store.getters.calls;
    },
    numberOfPages() {
      return Math.ceil(this.calls.length / this.itemsPerPage);
    },
    itemsPerPage: {
      get() {
        return this.$store.getters.getItemsPerPage;
      },
      set(value) {
        this.$store.commit("updateItemPerPage", value);
      },
    },
    page: {
      get() {
        return this.$store.getters.getPage;
      },
      set(value) {
        console.log("set value page", value);
        return this.$store.commit("updatePage", value);
      },
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.page = 1;
      this.itemsPerPage = number;
    },
  },
};
</script>

<style>
</style>