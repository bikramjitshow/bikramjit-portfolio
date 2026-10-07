import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("@/views/SkillsView.vue"),
  },
  {
    path: "/experience",
    name: "experience",
    component: () => import("@/views/ExperienceView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/views/ProjectsView.vue"),
  },
  {
    path: "/projects/:id",
    name: "project-detail",
    component: () => import("@/views/ProjectDetailView.vue"),
    props: true,
  },
  {
    path: "/services",
    name: "services",
    component: () => import("@/views/ServicesView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("@/views/ResumeView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
