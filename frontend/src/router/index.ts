import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import StakingView from "@/views/StakingView.vue";
import MarketplaceView from "@/views/MarketplaceView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import LearnView from "@/views/LearnView.vue";
import BlogView from "@/views/BlogView.vue";
import ListEMoblityView from "@/views/ListEMoblityView.vue";
import SignInView from "@/views/SignInView.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomeView
  },
  {
    path: "/staking",
    name: "StakingPage",
    props: true,
    component: StakingView,
  },
  {
    path: "/marketplace",
    name: "MarketplacePage",
    props: true,
    component: MarketplaceView,
  },
  {
    path: "/about-us",
    name: "AboutUsPage",
    props: true,
    component: AboutUsView,
  },
  {
    path: "/learn",
    name: "LearnPage",
    props: true,
    component: LearnView,
  },
  {
    path: "/blog",
    name: "BlogPage",
    props: true,
    component: BlogView,
  },
  {
    path: "/list-emobility",
    name: "ListEMoblityPage",
    props: true,
    component: ListEMoblityView,
  },
  {
    path: "/sign-in",
    name: "SignInPage",
    props: true,
    component: SignInView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
