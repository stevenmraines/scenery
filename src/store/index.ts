import Vue from "vue";
import Vuex from "vuex";
import * as _ from "lodash";
import ActBreak from "@/classes/ActBreak";
import Project from "@/classes/Project";
import Scene from "@/classes/Scene";
import Status from "@/classes/Status";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {}, // For asynchronous mutations
  getters: {},
  modules: {},
  mutations: {
    ADD_ACT_BREAK: (state, actBreak) => state.project.getCards().push(actBreak),
    ADD_SCENE: (state, scene) => state.project.getCards().push(scene),
    // ADD_STATUS: () => (),
    EDIT_ACT_BREAK: (state, data) =>
      state.project.setCards(
        state.project.getCards().splice(data.index, 1, data.newActBreak)
      ),
    EDIT_SCENE: (state, data) =>
      (state.project.getCards()[data.index] = data.newScene),
    EDIT_STATUS: (state, data) =>
      state.statuses.splice(data.index, 1, data.status),
    // REMOVE_ACT_BREAK: () => (),
    REMOVE_SCENE: (state, scene) =>
      state.project.setCards(_.pull(state.project.getCards(), scene)),
    // REMOVE_STATUS: () => (),
    SET_TITLE: (state, title) => state.project.setTitle(title)
  },
  state: {
    project: new Project(
      [
        new ActBreak(1),
        new Scene(
          "Add a scene description here",
          true,
          new Status("#ffffff", "Scene Not Written"),
          "Add a title here"
        ),
        new Scene(
          "Wow, what a description!",
          false,
          new Status("#dcffdc", "Scene Completed"),
          "Completed"
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
