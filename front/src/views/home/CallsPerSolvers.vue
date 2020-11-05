 <template>
  <v-dialog v-model="dialog" max-width="900">
    <v-card v-click-outside="redirectHome">
      <v-card-title class="headline">
        Chamados de {{ solver.name }}
      </v-card-title>

      <v-card-text>
        <v-progress-linear
          :indeterminate="true"
          v-if="!calls"
        ></v-progress-linear>

        <v-data-table
          v-else
          :headers="headers"
          :items="calls"
          loading-text="caregando.."
          loader-height="2"
          :search="search"
          :items-per-page="pagination.itemsPerPage"
          :options.sync="pagination"
          :footer-props="{
            itemsPerPageText: 'Linhas por Página',
            itemsPerPageAllText: 'Todos',
            pageText: `${pagination.page} de ${numberOfPages}`,
          }"
        >
          <template v-slot:top>
            <v-text-field
              clearable
              label="Buscar"
              v-model="search"
              prepend-icon="mdi-magnify"
            ></v-text-field>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn icon color="primary" @click="toDetailsCall(item.id)">
              <v-icon>mdi-card-account-details</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
 
 <script>
import {} from "vuex";

export default {
  async created() {
    let calls = await this.$store.dispatch(
      "detailsCallsPerSolver",
      this.solver.id
    );
    this.calls = calls.data;
  },
  props: ["solver"],
  data() {
    return {
      dialog: true,
      calls: null,
      pagination: {},
      headers: [
        {
          text: "Número",
          align: "start",
          value: "id",
        },
        {
          text: "Nome",
          align: "start",
          value: "name",
        },
        {
          text: "Status",
          align: "start",
          value: "statu",
        },
        {
          text: "Ações",
          align: "start",
          value: "actions",
        },
      ],
    };
  },
  methods: {
    redirectHome() {
      this.$router.replace({ name: "home" });
    },
    toDetailsCall(id) {
      this.$router.push({
        name: "callsEdit",
        params: { id, solver: this.solver },
      });
    },
  },
  computed: {
    search: {
      get() {
        return this.$store.getters.search;
      },
      set(value) {
        this.$store.commit("updateSerach", value);
      },
    },

    numberOfPages() {
      return Math.ceil(this.calls.length / this.pagination.itemsPerPage);
    },
  },
};
</script>
 
 <style>
</style>