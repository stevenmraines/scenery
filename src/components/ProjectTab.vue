<template>
  <div class="align-center d-flex flex-wrap justify-space-around pa-3">
    <Card
      :background-color="card.backgroundColor"
      :description="card.description"
      :font-color="card.fontColor"
      :is-plot="card.isPlot"
      :key="index"
      :title="card.title"
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
  props: ["cards"]
});
</script>
