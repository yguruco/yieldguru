<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto  h-auto px-24 py-2 flex justify-between items-center">
      <!-- logo section -->
      <router-link :to="{ name: 'HomePage' }" :class="'text-primary-500 text-center flex items-center'">
        <img src="../../../public/YieldGuru logo.jpeg" width="50" height="50" class="" alt="Yield Guru"/>
        <div class="flex gap-2 ml-2 text-2xl font-semibold lg:text-3xl 2xl:text-4xl text-primary-500">Yield <span class="text-labs-orange">Guru</span></div>
      </router-link>
      <!-- desktop view -->
      <div class="flex flex-row gap-6">
        <div class="hidden md:flex md:items-center gap-8" >
          <div v-for="route in navObj" class="flex gap-6">
            <router-link :to="{ name: route.pageName }"
              :class="[router.name == route.pageName ? 'text-labs-orange': 'text-primary-500']"
              class="flex items-center hover:text-labs-orange font-xl">
                {{ route.label }}
            </router-link>
          </div>
          <a href="#" class="bg-primary-500 text-white px-1 py-1 rounded-md text-lg font-medium hover:bg-labs-orange">
              Log In
          </a>
          <a href="#" class="bg-primary-500 text-white px-1 py-1 rounded-md text-lg font-medium hover:bg-labs-orange">
              Sign Up
          </a>
        </div>
      </div>
      <!-- mobile view -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isOpen" class="md:hidden">
      <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link :to="{ name: 'StakingPage' }" class="text-red-600 hover:pb-4 hover:border-b-4 hover:text-orange-400">Staking</router-link>
        <router-link :to="{ name: 'HomePage' }" class="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400">Marketplace</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// import router from '@/router';
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue';

const router = useRoute()

let isOpen = ref<boolean>(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

let navObj = [
  {
    'pageName': 'StakingPage',
    'label': 'Staking',
  },
  {
    'pageName': 'MarketplacePage',
    'label': 'Marketplace',
  },
  {
    'pageName': 'AboutUsPage',
    'label': 'About Us',
  },
  {
    'pageName': 'LearnPage',
    'label': 'Learn',
  },
  {
    'pageName': 'BlogPage',
    'label': 'Blog',
  },
  {
    'pageName': 'ListEMoblityPage',
    'label': 'List E-Mobility',
  }
];



</script>

<style scoped>

</style>


