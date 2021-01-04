<template>
  <v-app>
    <v-main v-if="$route.name == 'login'" class="d-flex align-center">
      <v-container fluid class="d-flex justify-center">
        <router-view />
      </v-container>
    </v-main>
    <layout-default v-else>
      <v-container grid-list-xs class="d-flex justify-space-around">
        
        <OnScroll></OnScroll>

        <ContainerChat />
      </v-container>
      <router-view />
    </layout-default>
  </v-app>
</template>

<script>
import LayoutDefault from "./components/template/LayoutDefault";
import OnScroll from "./components/OnScroll";
import ContainerChat from "./components/Chat/ContainerChat";

export default {
  components: { LayoutDefault, OnScroll, ContainerChat },
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
