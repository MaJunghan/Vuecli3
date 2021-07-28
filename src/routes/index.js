import { createWebHistory, createRouter } from "vue-router";
import NewsView from '@/components/NewsView.vue'
import AskView from '@/components/AskView.vue';
import JobsView from '@/components/JobsView.vue';
import UserView from '@/components/UserView.vue'
import ItemView from '@/components/ItemView'


const routes = [
      {
        path: "/news",
        name: "news",
        component: NewsView,
      },
      {
        path: "/ask",
        name: "ask",
        component: AskView,
      },
      {
          path: "/jobs",
          name: "jobs",
          component: JobsView,
      },
      {
        path: "/user/:id",
        component: UserView,
      },
      {
        path: "/item/:id",
        component: ItemView,
      },
];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;