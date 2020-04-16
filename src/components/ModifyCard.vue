<template>
  <div>
    <v-form @submit.prevent="saveChanges">
      <v-text-field filled label="Title" v-model="newCard.title"></v-text-field>
      <v-textarea
        filled
        label="Description"
        v-model="newCard.description"
      ></v-textarea>
      <v-checkbox label="Plot Scene" v-model="newCard.isPlot"></v-checkbox>
      <v-btn color="primary" type="submit">Save</v-btn>
    </v-form>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "ModifyCard",
  computed: {
    ...mapState(["project"])
  },
  data() {
    return {
      newCard: {
        backgroundColor: "white",
        description: "",
        fontColor: "black",
        isPlot: false,
        title: ""
      }
    };
  },
  methods: {
    ...mapMutations(["ADD_CARD"]),
    saveChanges: function() {
      this.ADD_CARD(this.newCard);
      this.newCard = {
        backgroundColor: "white",
        description: "",
        fontColor: "black",
        isPlot: false,
        title: ""
      };
    }
  }
});
</script>
