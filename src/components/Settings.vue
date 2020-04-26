<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form @submit.prevent="submit">
          <div>
            <h1 class="d-inline-block font-weight-light">{{ $route.name }}</h1>
            <router-link to="project">
              <v-tooltip bottom>
                <template #activator="{ on }">
                  <v-btn
                    class="float-right"
                    color="primary"
                    icon
                    large
                    v-on="on"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </template>
                <span>Return to Project View</span>
              </v-tooltip>
            </router-link>
          </div>
          <v-divider class="my-4"></v-divider>
          <h2 class="font-weight-light">Title</h2>
          <v-text-field autofocus v-model="settings.title"></v-text-field>
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
  created() {
    this.settings.title = this.project.getTitle();
  },
  data() {
    return {
      settings: {
        title: ""
      }
    };
  },
  methods: {
    ...mapMutations(["SET_TITLE"]),
    submit() {
      this.SET_TITLE(this.settings.title);
      this.$router.push("project");
    }
  },
  name: "Settings"
});
</script>
