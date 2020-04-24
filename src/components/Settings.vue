<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form @submit.prevent="setTitle">
          <h1 class="font-weight-light">Project Settings</h1>
          <v-divider class="my-4"></v-divider>
          <h2 class="font-weight-light">Title</h2>
          <v-text-field autofocus v-model="newTitle"></v-text-field>
          <h2 class="font-weight-light">Statuses</h2>
          <color-input
            :default="status.getColor()"
            :key="index"
            :label="'\'' + status.getName() + '\' Color'"
            v-for="(status, index) in statuses"
          ></color-input>
          <v-btn type="submit">Save</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import ColorInput from "@/components/ColorInput";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  components: {
    ColorInput
  },
  computed: {
    ...mapState(["project", "statuses"])
  },
  data() {
    return {
      newSettings: {},
      newTitle: "" //this.project.getTitle()
    };
  },
  methods: {
    ...mapMutations(["SET_TITLE"]),
    setTitle: function() {
      this.SET_TITLE(this.newTitle);
    }
  },
  name: "Settings"
});
</script>
