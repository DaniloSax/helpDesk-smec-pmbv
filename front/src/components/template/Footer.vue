<template>
  <v-footer class="footer-color" height="50%" absolute app>
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
import localforage from "localforage";

export default {
  async mounted() {
    await this.$store.dispatch("allNotifications");
    await this.$store.dispatch("loadUsers");

    localforage.getItem("helpDesk").then(item => {
      const auth = item.login.auth;

      window.Echo.private(`user-chat${auth.id}`).listen("SendMessage", resp => {
        // console.log("resposta do Echo", resp.message.from);

        this.$store.commit("SEND_NEW_MESSAGE", resp.message);
        this.$store.commit("ACTIVE_CIRCLE_NOTIFY", resp.message.from);
      });
    });
  }
};
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
