<template>
  <v-app>
    <v-main v-if="$route.name == 'login'" class="d-flex align-center">
      <v-container fluid class="d-flex justify-center">
        <router-view />
      </v-container>
    </v-main>
    <layout-default v-else>

        <OnScroll></OnScroll>

        <ChatContainer v-if="$route.name !== 'chat'" />
      <router-view />
    </layout-default>
  </v-app>
</template>

<script>
import LayoutDefault from "./components/template/LayoutDefault";
import OnScroll from "./components/OnScroll";
import ChatContainer from "./components/Chat/ChatContainer";

export default {
  components: { LayoutDefault, OnScroll, ChatContainer }
};
</script>

<style lang="css">
#app {
  background: #d3cce3;
  background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);
  background: linear-gradient(to right, #e9e4f0, #d3cce3);
}

a {
  text-decoration: none;
}
</style>
