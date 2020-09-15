<template>
  <v-app>
    <Head />
    <SidebBar />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Head from "./Head";
import Footer from "./Footer";
import SidebBar from "./SidebBar";

export default {
  components: { SidebBar, Head, Footer }
};
</script>

<style>
</style>