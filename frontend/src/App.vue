<template>
  <div id="app">
    <Navbar />
    <router-view :class="'min-h-screen'" />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/global/Navbar.vue";
import Footer from "./components/global/Footer.vue";

</script>
<style></style>
