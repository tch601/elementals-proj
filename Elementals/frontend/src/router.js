import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import StoryManager from "./pages/StoryManager.vue";
import Characters from "./pages/Characters.vue";
import Organizations from "./pages/Organizations.vue";
import Edit from './pages/Edit.vue';

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      color: "yellow",
      homepage: false,
      navbar: true,
    },
    {
      path: "/story",
      name: "Story",
      component: StoryManager,
      color: "red",
      homepage: true,
      navbar: true,
    },
    {
      path: "/characters",
      name: "Characters",
      component: Characters,
      color: "purple",
      homepage: true,
      navbar: true,
    },
    {
      path: "/organizations",
      name: "Organizations",
      component: Organizations,
      color: "blue",
      homepage: true,
      navbar: true,
    },
    {
      path: "/edit",
      name: "Edit",
      component: Edit,
      color: "",
      homepage: false,
      navbar: false,
    },
  ],
});

export default router;
