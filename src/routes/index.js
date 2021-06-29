import { createWebHistory, createRouter } from "vue-router";
import NewsView from '../components/NewsView.vue'
import AskView from '../components/AskView.vue';
import JobsView from '../components/JobsView.vue';


const routes = [
    {
      path: "/news",
      name: "NewsView",
      component: NewsView,
    },
    {
      path: "/ask",
      name: "AskView",
      component: AskView,
    },
    {
        path: "/jobs",
        name: "JobsView",
        component: JobsView,
      },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;