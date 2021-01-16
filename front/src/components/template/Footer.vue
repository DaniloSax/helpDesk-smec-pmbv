<template>
  <v-footer class="footer-color" height="50%"  absolute app>
    <v-row>
      <v-col class="text-center">
        <span class="white--text"
          >&copy; Prefeitura Municipal de Boa Vista | HelpDesk - Sistema de
          Suporte ao SISGEP</span
        >
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