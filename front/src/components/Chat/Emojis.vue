 <template>
  <v-menu
    top
    right
    offset-x
    :close-on-content-click="closeOnContentClick"
    transition="slide-x-transition"
  >
    <!-- origin="center center"
    transition="scale-transition" -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="blue-grey lighten-5" dark v-bind="attrs" v-on="on">
        <v-icon medium>mdi-emoticon-excited-outline</v-icon>
      </v-btn>
    </template>
    <Picker
      set="google"
      :perLine="7"
      :i18n="ptBr"
      :skin="3"
      :include="include"
      :infiniteScroll="false"
      title="Emojis"
      :showPreview="false"
      @select="selectEmoji"
    />
  </v-menu>
</template>
 
 <script>
import { Picker } from "emoji-mart-vue";

export default {
  components: { Picker },
  data() {
    return {
      ptBr: {
        search: "Buscar",
        notfound: "Emoji não encontrado",
        categories: {
          search: "Buscar Resultados",
          recent: "Usados frequetemente",
          people: "Smileys & Pessoas",
          nature: "Animais & Natureza",
          foods: "Comidas & Bebidas",
          activity: "Atividade",
          places: "Viagem & Lugares",
          objects: "Objetos",
          symbols: "Símbolos",
          flags: "Bandeiras",
          custom: "Personalizados",
        },
      },
      include: ["recent", "people", "activity"],
      closeOnContentClick: false,
    };
  },
  methods: {
    selectEmoji(emoji) {
      this.$emit("input-emoji", emoji);
    },
  },
};
</script>
 
 <style>
</style>