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
      :items="users"
      item-height="40%"
      height="300"
      max-height="100%"
    >
      <template v-slot:default="{ item }">
        <v-list>
          <v-divider inset></v-divider>
          <v-list-item link @click="setCurrentMessages(item)">
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <!-- <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon> -->

            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-virtual-scroll>
  </v-navigation-drawer>
</template>
 
 <script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
      drawer: false,
    };
  },

  computed: {
    ...mapGetters(["getChatUsers", "getcurrentMessages"]),
    users() {
      if (this.search) {
        return this.getChatUsers.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.getChatUsers;
      }
    },
  },
  methods: {
    setCurrentMessages(user) {
      this.$store.commit("SET_CURRENT_MESSAGE", user);
    },
  },
};
</script>
 
 <style scope>
</style>