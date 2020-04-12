<template>
  <div class="align-center d-flex flex-wrap justify-space-around pa-3">
    <Card
      :back="card.back"
      :background-color="card.backgroundColor"
      :font-color="card.fontColor"
      :front="card.front"
      :is-plot="card.isPlot"
      :key="index"
      v-for="(card, index) in cards"
    />
  </div>
</template>

<script>
import Vue from "vue";
import Card from "./Card.vue";

export default Vue.extend({
  components: { Card },
  name: "ProjectTab",
  props: ["cards", "projectName"]
});
</script>
