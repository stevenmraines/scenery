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
  getters: {
    actBreaks: state => {
      return state.project.getCards().filter(card => card instanceof ActBreak);
    },
    statusNames: state => {
      const names = [];
      for (let i = 0; i < state.statuses.length; i++) {
        names.push(state.statuses[i].getName());
      }
      return names;
    },
    scenes: state => {
      return state.project.getCards().filter(card => card instanceof Scene);
    }
  },
  modules: {},
  mutations: {
    ADD_ACT_BREAK: (state, actBreak) => state.project.getCards().push(actBreak),
    ADD_SCENE: (state, scene) => state.project.getCards().push(scene),
    EDIT_ACT_BREAK: (state, data) =>
      state.project.setCards(
        state.project.getCards().splice(data.index, 1, data.newActBreak)
      ),
    EDIT_SCENE: (state, data) =>
      (state.project.getCards()[data.index] = data.newScene),
    // REMOVE_ACT_BREAK: () => (),
    REMOVE_SCENE: (state, scene) =>
      state.project.setCards(_.pull(state.project.getCards(), scene)),
    SET_STATUSES: (state, statuses) => (state.statuses = statuses),
    SET_TITLE: (state, title) => state.project.setTitle(title)
  },
  state: {
    project: new Project(
      [
        new ActBreak(1),
        new Scene(
          "Add a scene description here",
          true,
          new Status("#ffffff", "Not Written"),
          "Add a title here"
        )
      ],
      "New Project"
    ),
    statuses: [
      new Status("#ffffff", "Not Written"),
      new Status("#dcffdc", "Completed"),
      new Status("#dcdcff", "Partially Written"),
      new Status("#ffffdc", "Needs Rewrites"),
      new Status("#ffdcdc", "Possibly Unnecessary")
    ]
  }
});
