import Vue from "vue";
import Router from "vue-router";
import AddScene from "@/components/AddScene.vue";
import AddActBreak from "@/components/AddActBreak.vue";
import Project from "@/components/Project.vue";
import Settings from "@/components/Settings.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      component: AddActBreak,
      name: "Add an Act Break",
      path: "/addActBreak"
    },
    {
      component: AddScene,
      name: "Add a Scene",
      path: "/addScene"
    },
    {
      component: Settings,
      name: "New Project",
      path: "/"
    },
    {
      component: Project,
      name: "Project",
      path: "/project"
    },
    {
      component: Settings,
      name: "Project Settings",
      path: "/settings"
    }
  ]
});
