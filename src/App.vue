<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              color="primary"
              dark
              v-on="on"
            >
              File
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in fileMenu"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              color="primary"
              dark
              v-on="on"
            >
              Edit
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in editMenu"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-content>
      <project-tab :cards="cards" :name="name" />
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
    cards: [{
        back: "BACK Test scene #1",
        backgroundColor: "white",
        fontColor: "black",
        front: "Test scene #1",
        isPlot: true,
        key: 1
    }],
    editMenu: [
      { title: "Add a Card" },
      { title: "Edit Card" },
      { title: "Delete Card" }
    ],
    fileMenu: [
      { title: "New Project" },
      { title: "Open Project" },
      { title: "Save Project" }
    ],
    name: "Test Project"
  })
});
</script>
