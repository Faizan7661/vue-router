import "./assets/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Notfound from "./components/pages/NotFound.vue";
import Posts from "./components/Posts.vue";
import SinglePost from "./components/pages/SinglePost.vue";
import Login from './components/pages/Login.vue'

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/:pathMatch(.*)",
    component: Notfound,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/posts",
    component: Posts,
    name : "posts",
    children: [
      {
        path: ":id",
        component: SinglePost,
        name :'SinglePost'
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
