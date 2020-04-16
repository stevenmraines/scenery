import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    project: {
      cards: [
        {
          backgroundColor: "white",
          description: "Add a longer description or some notes here.",
          fontColor: "black",
          isPlot: true,
          title: "Add a title here"
        }
      ],
      title: "New Project"
    }
  },
  mutations: {
    ADD_CARD: (state, card) => state.project.cards.push(card),
    SET_TITLE: (state, title) => (state.project.title = title)
  },
  actions: {
    // For asynchronous mutations
  },
  modules: {}
});
