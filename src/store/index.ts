import Vue from "vue";
import Vuex from "vuex";
import * as _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {}, // For asynchronous mutations
  getters: {
    // TODO is this needed for Card child component?
    getCardByIndex: state => (index: number) => {
      state.project.cards.filter(function(card, i) {
        return i === index;
      });
    }
  },
  modules: {},
  mutations: {
    ADD_CARD: function(state, card) {
      state.undo.push(state.project);
      state.project.cards.push(card);
    },
    EDIT_CARD: (state, data) =>
      (state.project.cards[data.index] = data.newCard),
    REDO: function(state) {
      const redo = state.redo.pop();
      if (redo) {
        state.undo.push(state.project);
        state.project = redo;
      }
    },
    REMOVE_CARD: (state, card) =>
      (state.project.cards = _.pull(state.project.cards, card)),
    SET_TITLE: function(state, title) {
      state.undo.push(state.project);
      state.project.title = title;
    },
    UNDO: function(state) {
      const undo = state.undo.pop();
      if (undo) {
        state.redo.push(state.project);
        state.project = undo;
      }
    }
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
    } as ProjectType,
    redo: [] as ProjectType[],
    undo: [] as ProjectType[]
  }
});
