<template>
  <div>
    <v-form>
      <v-text-field filled label="Title" :value="title"></v-text-field>
      <v-textarea filled label="Description" :value="description"></v-textarea>
      <v-radio-group label="Scene Type">
        <v-radio label="Plot"></v-radio>
        <v-radio label="Filler"></v-radio>
      </v-radio-group>
      <v-btn color="primary">Save</v-btn>
    </v-form>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ModifyCard",
  props: ["description", "title"]
});
</script>

<style scoped>

</style>