<template>
  <div class="align-center d-flex flex-wrap justify-space-around pa-3">
    <Card
      :card="card"
      :key="index"
      v-for="(card, index) in project.getCards()"
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
