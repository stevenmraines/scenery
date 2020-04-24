import Vue from "vue";
import Router from "vue-router";
import AddCard from "@/components/AddCard.vue";
import Project from "@/components/Project.vue";
import Settings from "@/components/Settings.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      component: AddCard,
      name: "Add a Card",
      path: "/addCard"
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
