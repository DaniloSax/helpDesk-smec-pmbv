<template>
  <v-container>
    <v-card tile>
      <v-card-title class="app-bar-color mb-5">
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

      <v-card-text v-else>
        <v-row class="d-flex align-center">
          <v-col cols="8">
            <v-card elevation="8" color="white">
              <v-card-title>Chamados Solucionados</v-card-title>
              <v-card-text>
                <chart-bar :height="150" :chart-data="collectionChartBar" />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card elevation="8" color="white">
              <v-card-text>
                <chart-pie :chart-data="collectionChartPie" :height="350" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
 
<script>
import ChartPie from "./components/ChartPie";
import ChartBar from "./components/ChartBar";
import { mapGetters } from "vuex";

export default {
  async created() {
    this.loaded = true;
    await this.$store.dispatch("statusAllCalls").then((statusAllCalls) => {
      this.$store.dispatch("callPerUserSolver").then(() => {
        this.statusAllCalls = statusAllCalls;
        this.callPerUser = this.getcallPerUser;
        // console.log("callPerUser", this.callPerUser);
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
    };
  },
  components: { ChartPie, ChartBar },
  computed: { ...mapGetters({ getcallPerUser: "callPerUserSolver" }) },
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
            label: "Concluido",
            backgroundColor: "#C6FF00",
            data: this.callPerUser.map((item) => item.concluded),
          },
          {
            label: "Paralisado",
            backgroundColor: "#EF9A9A",
            data: this.callPerUser.map((item) => item.paralyzed),
          },
          {
            label: "Cancelado",
            backgroundColor: "#BBDEFB",
            data: this.callPerUser.map((item) => item.canceled),
          },
          {
            label: "Atrasado",
            backgroundColor: "#E6EE9C",
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