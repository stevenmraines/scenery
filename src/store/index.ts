import Vue from "vue";
import Vuex from "vuex";
import * as _ from "lodash";
import { ActBreak, Project, Scene } from "@/classes";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {}, // For asynchronous mutations
  getters: {},
  modules: {},
  mutations: {
    ADD_ACT_BREAK: (state, actBreak) => state.project.getCards().push(actBreak),
    ADD_CARD: (state, card) => state.project.getCards().push(card),
    EDIT_CARD: (state, data) =>
      (state.project.getCards()[data.index] = data.newCard),
    REMOVE_CARD: (state, card) =>
      state.project.setCards(_.pull(state.project.getCards(), card)),
    SET_TITLE: (state, title) => state.project.setTitle(title)
  },
  state: {
    project: new Project(
      [
        new Scene(
          "#ffffff",
          "Add a scene description here",
          "#000000",
          true,
          "Add a title here"
        )
      ],
      "New Project"
    )
  }
});
