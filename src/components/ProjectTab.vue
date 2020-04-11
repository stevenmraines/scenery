<template>
  <div>
    <Card
      :back="card.back"
      :background-color="card.backgroundColor"
      :font-color="card.fontColor"
      :front="card.front"
      :is-plot="card.isPlot"
      :key="card.key"
      v-for="card in cards"
    />
  </div>
</template>

<script>
import Vue from "vue";
import Card from "./Card.vue";

export default Vue.extend({
  components: { Card },
  name: "ProjectTab",
  props: ["cards", "name"]
});
</script>
