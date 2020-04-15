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
              <input id="open-project" style="visibility: hidden" type="file" />
            </v-list-item>
            <v-list-item @click="saveProject">
              <v-list-item-title>Save Project</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div id="project-title-container">
        <span>{{ project.title }}</span>
        <i
          @click="editProjectTitle"
          class="clickable mdi mdi-file-document-edit"
        ></i>
      </div>

      <div id="project-title-edit-container" style="display: none;">
        <!-- TODO undo all this work I just did to use Vuetify text field instead... -->
        <input
          id="project-title"
          style="border-bottom: 1px solid black; outline: none;"
          v-model="project.title"
        />
        <i
          @click="saveProjectTitle"
          class="clickable mdi mdi-check"
          style="color: lawngreen;"
        ></i>
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3">
            <modify-card></modify-card>
          </v-col>
          <v-col>
            <project-tab :cards="project.cards" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectTab from "./components/ProjectTab.vue";
import ModifyCard from "./components/ModifyCard.vue";

export default Vue.extend({
  name: "App",

  components: {
    ModifyCard,
    ProjectTab
  },

  created() {
    document.addEventListener("keyup", this.keyListener);
  },

  data: () => ({
    project: {
      cards: [
        {
          backgroundColor: "white",
          description: "BACK Test scene #1",
          fontColor: "black",
          isPlot: true,
          title: "Test scene #1"
        },
        {
          backgroundColor: "white",
          description: "BACK Test scene #1",
          fontColor: "black",
          isPlot: true,
          title: "Test scene #2"
        },
        {
          backgroundColor: "white",
          description: "BACK Test scene #1",
          fontColor: "black",
          isPlot: true,
          title: "Test scene #3"
        }
      ],
      title: "New Project"
    }
  }),

  methods: {
    // TODO make the title edit / save stuff not automatically save changes
    editProjectTitle: function() {
      const projectTitle = document.getElementById("project-title");
      const projectTitleContainer = document.getElementById("project-title-container");
      const projectTitleEditContainer = document.getElementById("project-title-edit-container");
      if (projectTitle && projectTitleContainer && projectTitleEditContainer) {
        projectTitleContainer.style.display = "none";
        projectTitleEditContainer.style.display = "block";
        projectTitle.focus();
      }
    },
    getFilename: function() {
      // TODO make this strip out any unusable characters
      return this.project.title + ".json";
    },
    hasFocus: function(element: HTMLElement | null) {
      return element === document.activeElement;
    },
    keyListener: function(event: KeyboardEvent) {
      switch (event.key) {
        case "Enter":
        case "Escape":
          this.saveProjectTitleIfActive();
          break;
        case "n":
          break;
        case "o":
          break;
        case "s":
          if (event.ctrlKey) {
            this.saveProject();
          }
          break;
        default:
          break;
      }
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
    saveProject: function() {
      const anchor = document.createElement("a") as HTMLAnchorElement;
      const file = new Blob([JSON.stringify(this.project)], { type: "json" });
      anchor.href = URL.createObjectURL(file);
      anchor.download = this.getFilename();
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(anchor.href);
    },
    saveProjectTitle: function() {
      const projectTitleContainer = document.getElementById("project-title-container");
      const projectTitleEditContainer = document.getElementById("project-title-edit-container");
      if (projectTitleContainer && projectTitleEditContainer) {
        projectTitleContainer.style.display = "block";
        projectTitleEditContainer.style.display = "none";
      }
    },
    saveProjectTitleIfActive: function() {
      if (this.hasFocus(document.getElementById("project-title"))) {
        this.saveProjectTitle();
      }
    }
  }
});
</script>
