<template>
  <v-navigation-drawer v-model="drawer" absolute temporary bottom>
    <v-list nav dense>
      <v-list-item-group>
        <router-link class="remove-link" to="/home">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home-city-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>INÍCIO</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link class="remove-link" :to="{name:'calls'}">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-face-agent</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>CHAMADOS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link class="remove-link" :to="{name:'users'}">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>USUÁRIOS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link class="remove-link" to="/configure">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>CONFIGURAÇÕES</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.btnSideBar;
      },
      set(value) {
        this.$store.commit("updateBtnSideBar", value);
      }
    }
  }
};
</script>

<style scoped>
.remove-link {
  text-decoration: none;
}
</style>