<template>
  <v-footer height="60" class="footer-color " padless absolute app>
    <v-row>
      <v-col></v-col>
      <v-col cols="8" class="d-flex justify-center">
        <span class="white--text ">&copy; PMBV - SMAG - Folha de Pagamento</span>
      </v-col>
      <v-col class="d-flex align-end justify-end">
        <h5 class="white--text ">Versão 1.0 (beta)</h5>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.footer-color {
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>