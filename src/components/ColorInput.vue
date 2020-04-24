<template>
  <div>
    <v-input
      @click:prepend="clickColorInput"
      :color="color"
      :messages="color"
      prepend-icon="mdi-palette-swatch"
    >
      {{ label }}
    </v-input>
    <input
      ref="colorInput"
      style="visibility: hidden;"
      type="color"
      v-model="color"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      color: this.default
    };
  },
  methods: {
    clickColorInput() {
      this.$refs.colorInput.click();
    }
  },
  name: "ColorInput",
  props: ["default", "label"]
});
</script>
