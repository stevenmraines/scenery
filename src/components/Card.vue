<template>
  <span :style="{ 'background-color': backgroundColor }">{{ front }}</span>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Card",
  props: [
    "back",
    "backgroundColor",
    "fontColor",
    "front",
    "isPlot"
  ]
});
</script>
