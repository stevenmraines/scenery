<template>
  <v-app>
    <v-app-bar app>
      <div class="mr-3">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" v-on="on">
              File
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="newProject">
              <v-list-item-title>New Project</v-list-item-title>
            </v-list-item>
            <v-list-item @click="openProject">
              <v-list-item-title>Open Project</v-list-item-title>
            </v-list-item>
            <v-list-item @click="saveProject">
              <v-list-item-title>Save Project</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      {{ projectName }}
    </v-app-bar>

    <v-content>
      <project-tab :cards="cards" :project-name="projectName" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectTab from "./components/ProjectTab.vue";

export default Vue.extend({
  name: "App",

  components: {
    ProjectTab
  },

  data: () => ({
    cards: [
      {
        back: "BACK Test scene #1",
        backgroundColor: "white",
        fontColor: "black",
        front: "Test scene #1",
        isPlot: true
      },
      {
        back: "BACK Test scene #1",
        backgroundColor: "white",
        fontColor: "black",
        front: "Test scene #2",
        isPlot: true
      },
      {
        back: "BACK Test scene #1",
        backgroundColor: "white",
        fontColor: "black",
        front: "Test scene #3",
        isPlot: true
      },
      {
        back: "BACK Test scene #1",
        backgroundColor: "white",
        fontColor: "black",
        front: "Test scene #1",
        isPlot: true
      },
      {
        back: "BACK Test scene #1",
        backgroundColor: "white",
        fontColor: "black",
        front: "Test scene #2",
        isPlot: true
      },
      {
        back: "BACK Test scene #1",
        backgroundColor: "white",
        fontColor: "black",
        front: "Test scene #3",
        isPlot: true
      }
    ],
    projectName: "Test Project"
  }),

  methods: {
    newProject: () => console.log('New Project clicked'),
    openProject: () => console.log('Open Project clicked'),
    saveProject: () => console.log('Save Project clicked')
  }
});
</script>
