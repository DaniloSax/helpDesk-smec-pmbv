 <template>
  <v-navigation-drawer
    class="deep-purple accent-4"
    v-model="drawer"
    height="100%"
    permanent
    left
    dark
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-text-field
              v-model="search"
              placeholder="Buscar"
              clearable
              background-color="blue"
              autofocus
              rounded
            ></v-text-field>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-virtual-scroll
      :bench="0"
      :items="items"
      item-height="40%"
      height="300"
      max-height="200%"
    >
      <template v-slot:default="{ item }">
        <v-list>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-virtual-scroll>
  </v-navigation-drawer>
</template>
 
 <script>
export default {
  data() {
    return {
      search: "",
      items: [
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
        { icon: "mdi-account", title: "Joana Mendonça" },
      ],
      drawer: false,
    };
  },
};
</script>
 
 <style>
</style>