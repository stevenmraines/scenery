<template>
  <div>
    <v-tabs fixed-tabs primary>
      <v-tab>{{ project.getTitle() }}</v-tab>
    </v-tabs>
    <div class="align-center d-flex flex-wrap justify-space-around pa-3">
      <!-- TODO figure out how to display both of these in order -->
      <!--<act-break
        :act-break="actBreak"
        :key="index"
        v-for="(actBreak, index) in actBreaks"
      />-->
      <Scene :scene="scene" :key="index" v-for="(scene, index) in scenes" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
// import ActBreak from "./ActBreak";
import Scene from "./Scene.vue";
import ActBreakObj from "@/classes/ActBreak";
import SceneObj from "@/classes/Scene";

export default Vue.extend({
  components: { Scene },
  computed: {
    ...mapState(["project"]),
    actBreaks: function() {
      return this.project
        .getCards()
        .filter(card => card instanceof ActBreakObj);
    },
    scenes: function() {
      return this.project.getCards().filter(card => card instanceof SceneObj);
    }
  },
  name: "Project"
});
</script>
