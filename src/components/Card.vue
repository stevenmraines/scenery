<template>
  <span
    class="align-center card d-inline-block elevation-2 ma-2 pa-2 text-center"
    :style="{ 'background-color': backgroundColor }"
  >
    {{ front }}
  </span>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Card",
  props: ["back", "backgroundColor", "fontColor", "front", "isPlot"]
});
</script>
