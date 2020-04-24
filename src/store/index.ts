import Vue from "vue";
import Vuex from "vuex";
import * as _ from "lodash";
import { ActBreak, Project, Scene, Status } from "@/classes";

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
    EDIT_STATUS: (state, data) =>
      state.statuses.splice(data.index, 1, data.status),
    REMOVE_CARD: (state, card) =>
      state.project.setCards(_.pull(state.project.getCards(), card)),
    SET_TITLE: (state, title) => state.project.setTitle(title)
  },
  state: {
    project: new Project(
      [
        // new ActBreak(1),
        new Scene(
          "Add a scene description here",
          true,
          new Status("#ffffff", "Scene Not Written"),
          "Add a title here"
        )
      ],
      "New Project"
    ),
    statuses: [
      new Status("#ffffff", "Scene Not Written"),
      new Status("#dcffdc", "Scene Completed"),
      new Status("#dcdcff", "Scene Partially Written"),
      new Status("#ffffdc", "Scene Needs Rewrites"),
      new Status("#ffdcdc", "Scene Possibly Unnecessary")
    ]
  }
});
