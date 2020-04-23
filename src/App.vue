<template>
  <v-app>
    <v-app-bar app>
      <div class="mr-3">
        <v-menu offset-y>
          <template #activator="{ on }">
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
              <input id="open-project" style="visibility: hidden" type="file" />
            </v-list-item>
            <v-list-item @click="saveProject">
              <v-list-item-title>Save Project</v-list-item-title>
            </v-list-item>
            <v-list-item @click="projectSettings">
              <v-list-item-title>Project Settings</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="mr-3">
        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn color="primary" v-on="on">
              Edit
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="addCard">
              <v-list-item-title>Add Card</v-list-item-title>
            </v-list-item>
            <v-list-item @click="addActBreak">
              <v-list-item-title>Add Act Break</v-list-item-title>
            </v-list-item>
            <v-list-item @click="editCard" disabled>
              <v-list-item-title>Edit Card</v-list-item-title>
            </v-list-item>
            <v-list-item @click="removeCard" disabled>
              <v-list-item-title>Delete Card</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div>{{ project.getTitle() }}</div>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col>
            <project />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import Project from "./components/Project.vue";

export default Vue.extend({
  name: "App",

  components: {
    Project
  },

  computed: {
    ...mapState(["project"])
  },

  methods: {
    ...mapMutations(["ADD_ACT_BREAK", "ADD_CARD", "EDIT_CARD", "REMOVE_CARD"]),
    addActBreak: () => console.log("Add act break"),
    addCard: () => console.log("Add card"),
    editCard: () => console.log("Edit card"),
    getFilename: function() {
      // TODO make this strip out any unusable characters
      return this.project.title + ".json";
    },
    hasFocus: function(element: HTMLElement | null) {
      return element === document.activeElement;
    },
    newProject: () => console.log("New Project clicked"),
    openFile: function(event: Event) {
      const target = event.target as HTMLInputElement;
      const files = target.files;
      if (files) {
        const file: File = files[0];
        const reader = new FileReader();
        reader.onload = event => {
          if (event.target) {
            const target: any = event.target;
            const data = target.result;
            try {
              this.project = JSON.parse(data);
            } catch (exception) {
              // TODO handle invalid file contents
              console.log(exception);
            }
          }
        };
        reader.readAsText(file);
      }
    },
    openProject: function() {
      const input = document.getElementById("open-project") as HTMLInputElement;
      input.addEventListener("change", this.openFile);
      input.click();
    },
    projectSettings: () => console.log("Project settings"),
    removeCard: () => console.log("Remove card"),
    saveProject: function() {
      const anchor = document.createElement("a") as HTMLAnchorElement;
      const file = new Blob([JSON.stringify(this.project)], { type: "json" });
      anchor.href = URL.createObjectURL(file);
      anchor.download = this.getFilename();
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(anchor.href);
    }
  }
});
</script>
