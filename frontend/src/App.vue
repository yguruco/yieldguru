<template>
  <div id="app">
    <Navbar />
    <div class="min-h-[70vh]">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/global/Navbar.vue";
import Footer from "./components/global/Footer.vue";

</script>
<style>
</style>
