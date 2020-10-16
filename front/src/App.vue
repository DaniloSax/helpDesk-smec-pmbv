<template>
  <v-app>
    <!-- <template v-if="$route.name == 'login'"> -->
    <v-main v-if="$route.name == 'login'" class="d-flex align-center">
      <v-container fluid class="d-flex justify-center">
        <router-view />
      </v-container>
    </v-main>
    <!-- </template> -->
    <!-- <template v-else> -->
    <layout-default v-else>
      <router-view />
    </layout-default>
    <!-- </template> -->
  </v-app>
</template>

<script>
import LayoutDefault from "./components/template/LayoutDefault";

export default {
  components: { LayoutDefault },
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
