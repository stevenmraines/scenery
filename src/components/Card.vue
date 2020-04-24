<template>
  <v-menu transition="slide-x-transition">
    <template #activator="{ on }">
      <v-card
        class="index-card"
        :style="{ 'background-color': card.getStatus().getColor() }"
        v-on="on"
      >
        <v-card-title>
          {{ card.getTitle() }}
          <i class="mdi ml-auto" :class="isPlotIcon"></i>
        </v-card-title>
        <v-card-text>{{ card.getDescription() }}</v-card-text>
      </v-card>
    </template>
    <v-list>
      <v-list-item list>
        <v-list-item-title @click="editCard">
          Edit this card
        </v-list-item-title>
        <v-list-item-title @click="removeCard">
          Remove this card
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  computed: {
    isPlotIcon: function() {
      return {
        isPlot: this.card.getIsPlot(),
        "mdi-star": this.card.getIsPlot(),
        "mdi-star-outline": !this.card.getIsPlot()
      };
    }
  },
  methods: {
    ...mapMutations(["EDIT_CARD", "REMOVE_CARD"]),
    editCard: function() {
      this.EDIT_CARD({
        index: this.$vnode.key,
        newCard: this.card
      });
    },
    removeCard: function() {
      this.REMOVE_CARD(this.card);
    }
  },
  // TODO rename this to Scene
  name: "Card",
  props: ["card"]
});
</script>
