<template>
  <v-container>
    <router-view></router-view>
    <v-card tile>
      <v-card-title class="app-bar-color">
        <div class="white--text d-flex flex-column">
          <span class="headline">Bem Vindo</span>
          <p class="subtitle-1">Olá! Desejamos uma ótima experiência</p>
        </div>
      </v-card-title>

      <v-progress-linear
        v-if="loaded"
        class="d-flex justify-center align-baseline"
        indeterminate
        color="primary"
      ></v-progress-linear>

      <v-img
        v-else
        :max-height="!$vuetify.breakpoint.mobile ? '800' : ''"
        class="grey lighten-2"
        src="@/assets/images/background_solversStar.jpg"
      >
        <v-card-text>
          <v-row
            class="d-flex align-center"
            :class="$vuetify.breakpoint.mobile ? 'flex-column' : ''"
          >
            <v-col :cols="$vuetify.breakpoint.mobile ? '' : 8">
              <v-card elevation="8" color="white">
                <v-card-title>Chamados por solucionador</v-card-title>
                <v-card-text>
                  <chart-bar
                    :height="$vuetify.breakpoint.mobile ? 500 : 150"
                    :chart-data="collectionChartBar"
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.mobile ? '' : 4">
              <v-card elevation="8" color="white">
                <v-card-title>
                  <v-chip class="ma-2 headline" color="blue lighten-5"
                    >Total: {{ calls.length }} Chamados</v-chip
                  >
                </v-card-title>
                <v-card-text>
                  <chart-pie :chart-data="collectionChartPie" :height="300" />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card elevation="8" color="white">
                <v-card-text
                  class="d-lg-flex justify-lg-space-around flex-wrap"
                >
                  <Avatar
                    v-for="(solver, i) in solvers"
                    :key="i"
                    :solver="solver"
                  ></Avatar>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-img>
    </v-card>
  </v-container>
</template>
 
<script>
import ChartPie from "./components/ChartPie";
import ChartBar from "./components/ChartBar";
import Avatar from "./components/Avatar";
import { mapGetters } from "vuex";

export default {
  async created() {
    this.loaded = true;
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadAllResponses");
    this.calls = await this.$store.dispatch("loadCalls");
    await this.$store.dispatch("statusAllCalls").then((statusAllCalls) => {
      this.$store.dispatch("callPerUserSolver").then(() => {
        this.statusAllCalls = statusAllCalls;
        this.callPerUser = this.getcallPerUser;
        this.configChartPie();
        this.configChartBar();
        this.loaded = false;
      });
    });
  },
  data() {
    return {
      collectionChartPie: null,
      collectionChartBar: null,
      statusAllCalls: null,
      callPerUser: null,
      loaded: false,
      calls: null,
    };
  },
  components: { ChartPie, ChartBar, Avatar },
  computed: {
    ...mapGetters({
      getcallPerUser: "callPerUserSolver",
      users: "users",
    }),

    solvers() {
      let solvers = [];
      this.users.map((user) => {
        return user.roles.filter((role) => {
          if (role.name === "solucionador") {
            solvers.push(user);
          }
        });
      });
      return solvers;
    },
  },
  methods: {
    configChartPie() {
      this.collectionChartPie = {
        labels: this.statusAllCalls.map((item) => item.text),
        datasets: [
          {
            label: this.statusAllCalls.map((item) => item.text.toUpperCase()),
            backgroundColor: this.statusAllCalls.map((item) => item.color),
            data: this.statusAllCalls.map((item) => item.value),
          },
        ],
      };
    },

    configChartBar() {
      this.collectionChartBar = {
        labels: this.callPerUser.map((item) => item.user),
        datasets: [
          {
            label: "Concluído",
            backgroundColor: "#C6FF00",
            data: this.callPerUser.map((item) => item.concluded),
          },
          {
            label: "Paralisado",
            backgroundColor: "#FFEB3B",
            data: this.callPerUser.map((item) => item.paralyzed),
          },
          {
            label: "Cancelado",
            backgroundColor: "#BBDEFB",
            data: this.callPerUser.map((item) => item.canceled),
          },
          {
            label: "Atrasado",
            backgroundColor: "#EF9A9A",
            data: this.callPerUser.map((item) => item.late),
          },
          {
            label: "A Iniciar",
            backgroundColor: "#43A047",
            data: this.callPerUser.map((item) => item.starting),
          },
          {
            label: "Andamento",
            backgroundColor: "#FFF9C4",
            data: this.callPerUser.map((item) => item.progress),
          },
        ],
      };
    },
  },
};
</script>
 
 <style>
</style>