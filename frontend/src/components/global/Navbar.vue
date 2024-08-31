<template>
<div class="fixed w-full">
  <nav class="px-8 md:px-24 bg-white border-b-4 border-primary-40">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link :to="{ name: 'HomePage' }" href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/YieldGuru logo.jpeg" class="h-8" alt="Yield Guru Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-primary-500">Yield <span class="text-labs-orange">Guru</span></span>
      </router-link>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
          <li v-for="route in navObj">
            <router-link :to="{ name: route.pageName }"
                :class="[router.name == route.pageName ? 'text-labs-orange': 'text-primary-500']" v-if="route.type == 'text'"
                class="block py-2 px-3 hover:text-labs-orange rounded md:bg-transparent md:p-0" aria-current="page">{{ route.label }}
            </router-link>
            <span v-else> {{ route.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Spacer to Offset the Fixed Section -->
  <div class="h-48"></div>
</div>




  <!-- <nav class="bg-white shadow-md">
    <div class="container mx-auto  h-auto px-24 py-2 flex justify-between items-center">

      <router-link :to="{ name: 'HomePage' }" :class="'text-primary-500 text-center flex items-center'">
        <img src="../../../public/YieldGuru logo.jpeg" width="50" height="50" class="" alt="Yield Guru"/>
        <div class="flex gap-2 ml-2 text-2xl font-semibold lg:text-3xl 2xl:text-4xl text-primary-500">Yield <span class="text-labs-orange">Guru</span></div>
      </router-link>

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
  </nav> -->
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
    'type': 'text'
  },
  {
    'pageName': 'MarketplacePage',
    'label': 'Marketplace',
    'type': 'text'
  },
  {
    'pageName': 'AboutUsPage',
    'label': 'About Us',
    'type': 'text'
  },
  {
    'pageName': 'LearnPage',
    'label': 'Learn',
    'type': 'text'
  },
  {
    'pageName': 'BlogPage',
    'label': 'Blog',
    'type': 'text'
  },
  {
    'pageName': 'ListEMoblityPage',
    'label': 'List E-Mobility',
    'type': 'text'
  },
  {
    'pageName': 'LogInPage',
    'label': 'Log In',
    'type': 'button'
  },
  {
    'pageName': 'RegisterPage',
    'label': 'Register',
    'type': 'button'
  }
];



</script>

<style scoped>

</style>


