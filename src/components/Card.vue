<template>
  <v-card class="index-card" :style="{ 'background-color': backgroundColor }">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Card",
  props: ["backgroundColor", "description", "fontColor", "isPlot", "title"]
});
</script>
