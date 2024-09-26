<template>
  <section class="bg-white text-white py-12 min-h-[80vh] lg:min-h-[70vh] flex items-center">
    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center md:w-4/5">
      <!-- Hero Content -->
      <div class="order-2 lg:order-1 text-primary-500 mr-4 antialiased">
        <h1 class="text-4xl font-medium md:text-5xl gradient-text">
          Yield Guru Investments
        </h1>

        <h2 class="mt-4 text-lg md:text-xl gradient-text">
          Revolutionizing Public Transport and Investment
        </h2>
        <p class="gradient-text tracking-wide">
          Harnessing blockchain technology to tokenize electric mobility, Yield Guru Investments offers a unique trifecta of Cryptocurrency Management, Investment Opportunities, and Public Transportation Services.
        </p>
        <div class="mt-8 py-2">
          <a href="#" class="bg-[#C96300] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#730065]">
  Get Started
</a>

        </div>
      </div>
      <!-- Hero Image -->
      <div class="order-1 lg:order-2">
        <HeroSvg /> 
        <!-- <img src=". ./../../public/purple-bus.jpg" alt="Yield Guru" class="w-full h-auto"> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroSvg from '../global/svg/HeroSvg.vue';
</script>

<style>
.gradient-text {
  background: linear-gradient(to right, #ffa8bd, #242acf);
  -webkit-background-clip: text;
  color: transparent;
}
.custom-button {
  background-color: #C96300;
  color: white;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #730065;
}
</style>
