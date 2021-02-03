 <template>
  <v-navigation-drawer
    class="deep-purple accent-4"
    v-model="drawer"
    height="100%"
    max-height="100%"
    permanent
    left
    dark
  >
    <v-list >
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

      <v-list-item-group
        v-model="selection"
        class="overflow-y-auto pa-0"
        style="height: 350px; max-height: 350px; max-width: 100%"
      >
        <v-list-item
        class="border"
          link
          @click="setCurrentMessages(item)"
          v-for="item in users"
          :key="item.id"
        >
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <!-- <v-list-item-subtitle class="mt-2">
              <v-divider ></v-divider>
            </v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
 
 <script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
      drawer: false,
      activeClass: false,
      selection: "",
    };
  },

  computed: {
    ...mapGetters(["auth", "getChatUsers", "getcurrentMessages"]),
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
 .border{
   border-top: 0.7px solid rgba(219, 200, 200, 0.616);
 }
</style>