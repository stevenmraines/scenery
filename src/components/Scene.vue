<template>
  <v-menu transition="slide-x-transition">
    <template #activator="{ on }">
      <v-card
        class="index-card"
        :style="{ 'background-color': scene.getStatus().getColor() }"
        v-on="on"
      >
        <v-card-title>
          {{ scene.getTitle() }}
          <i class="mdi ml-auto" :class="isPlotIcon"></i>
        </v-card-title>
        <v-card-text>{{ scene.getDescription() }}</v-card-text>
      </v-card>
    </template>
    <v-list>
      <v-list-item list>
        <v-list-item-title @click="editScene">
          Edit this scene
        </v-list-item-title>
        <v-list-item-title @click="removeScene">
          Remove this scene
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
        isPlot: this.scene.getIsPlot(),
        "mdi-star": this.scene.getIsPlot(),
        "mdi-star-outline": !this.scene.getIsPlot()
      };
    }
  },
  methods: {
    ...mapMutations(["EDIT_SCENE", "REMOVE_SCENE"]),
    editScene: function() {
      this.EDIT_SCENE({
        index: this.$vnode.key,
        newScene: this.scene
      });
    },
    removeScene: function() {
      this.REMOVE_SCENE(this.scene);
    }
  },
  name: "Scene",
  props: ["scene"]
});
</script>
