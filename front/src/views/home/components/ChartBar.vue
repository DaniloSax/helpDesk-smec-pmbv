 
 <script>
import { Bar } from "vue-chartjs";
import { mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  // props: {
  //   labels: Array,
  //   datasets: Object,
  // },
  mounted() {
    // this.renderChart(
    //   {
    //     labels: [
    //       "Danilo",
    //       "Veloso",
    //       "Sousa",
    //       "José",
    //       "Mario",
    //       "Anderson",
    //       "Francisco",
    //       "Francisco",
    //       "Francisco",
    //       "Francisco",
    //       "Francisco",
    //     ],
    //     datasets: [
    //       {
    //         label: "Solucionou",
    //         backgroundColor: [
    //           "#80ffaa",
    //           "#ff99c2",
    //           "#ccffe6",
    //           "#99ccff",
    //           "#ffcc99",
    //           "#adadeb",
    //           "#ffc299",
    //         ],
    //         borderColor: "#80ffaa",
    //         data: [10, 20, 10, 5, 4, 15, 30, 30, 30, 30, 28],
    //       },
    //     ],
    //   },
    //   {
    //     responsive: true,
    //     legend: {
    //       display: true,
    //     },
    //     title: {
    //       display: true,
    //       text: `Chamados Solucionadas`,
    //     },
    //     scales: {
    //       xAxes: [
    //         {
    //           ticks: {
    //             display: false,
    //           },
    //         },
    //       ],
    //     },
    //   }
    // );

    this.renderChart(this.chartData, { responsive: true })
  },
};
</script>
 
 <style>
</style>