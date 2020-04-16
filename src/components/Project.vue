<template>
  <div class="align-center d-flex flex-wrap justify-space-around pa-3">
    <Card
      :background-color="card.backgroundColor"
      :description="card.description"
      :font-color="card.fontColor"
      :is-plot="card.isPlot"
      :key="index"
      :title="card.title"
      v-for="(card, index) in project.cards"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import Card from "./Card.vue";

export default Vue.extend({
  components: { Card },
  computed: {
    ...mapState(["project"])
  },
  name: "Project"
});
</script>
