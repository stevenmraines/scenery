<template>
  <v-container class="full pa-0" fluid>
    <v-row no-gutters>
      <v-col>
        <v-tabs grow primary>
          <v-tab>{{ project.getTitle() }}</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="full" no-gutters>
      <v-col class="full">
        <v-menu transition="slide-x-transition">
          <template #activator="{ on }">
            <div
              class="d-flex flex-wrap full justify-space-around pa-8"
              v-on="on"
            >
              <!-- TODO figure out how to display both of these in order -->
              <!--<act-break
                :act-break="actBreak"
                :key="index"
                v-for="(actBreak, index) in actBreaks"
              />-->
              <Scene
                :scene="scene"
                :key="index"
                v-for="(scene, index) in scenes"
              />
            </div>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                Add a Scene
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
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
