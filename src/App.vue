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
          </v-list>
        </v-menu>
      </div>

      <div>
        <v-form @submit.prevent="setTitle">
          <v-text-field label="Project" v-model="newTitle"></v-text-field>
        </v-form>
      </div>
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

  data() {
    return {
      newTitle: this.$store.state.project.title
    };
  },

  computed: {
    ...mapState(["project"])
  },

  methods: {
    ...mapMutations(["SET_TITLE"]),
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
    setTitle: function() {
      this.SET_TITLE(this.newTitle);
    }
  }
});
</script>
