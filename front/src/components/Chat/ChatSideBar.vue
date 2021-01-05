 <template>
  <!-- <v-card class="mx-auto" height="350" width="256"> -->
  <v-navigation-drawer
    class="deep-purple accent-4"
    v-model="drawer"
    height="350"
    permanent
    expand-on-hover
    left
    dark
  >
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>
 
 <script>
export default {
  data() {
    return {
      items: [{ icon: "mdi-delete", title: "Joana Mendonça" }],
      drawer: false,
    };
  },
};
</script>
 
 <style>
</style>