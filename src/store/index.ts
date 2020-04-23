import Vue from "vue";
import Vuex from "vuex";
import * as _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {}, // For asynchronous mutations
  getters: {},
  modules: {},
  mutations: {
    ADD_ACT_BREAK: () => console.log("Add act break"),
    ADD_CARD: (state, card) => state.project.cards.push(card),
    EDIT_CARD: (state, data) =>
      (state.project.cards[data.index] = data.newCard),
    REMOVE_CARD: (state, card) =>
      (state.project.cards = _.pull(state.project.cards, card)),
    SET_TITLE: (state, title) => (state.project.title = title)
  },
  state: {
    project: {
      cards: [
        {
          backgroundColor: "#ffffff",
          description: "Add a longer description or some notes here.",
          fontColor: "#000000",
          isPlot: true,
          title: "Add a title here"
        } as CardType
      ] as CardType[],
      title: "New Project"
    } as ProjectType
  }
});
