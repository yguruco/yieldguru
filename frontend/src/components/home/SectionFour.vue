<template>
    <section class="bg-custom min-h-[70vh] flex flex-col lg:flex-row lg:items-center">
      <div class="text-section flex-1">
        <h1 class="text-custom font-bold mb-4">Founder’s Passion: Advancing Financial Inclusion</h1>
        <div class="paragraph">
          <h2 class="text-custom font-normal mb-2">Driving Innovation</h2>
          <p class="text-custom font-light mb-4">As the founder of Yield Guru Investments, I am deeply passionate about leveraging blockchain technology to revolutionize public transportation and investment opportunities in Kenya.</p>
        </div>
        <div class="paragraph">
          <h2 class="text-custom font-normal mb-2">Empowering the Community</h2>
          <p class="text-custom font-light mb-4">My commitment to financial inclusion and economic empowerment has been the driving force behind this innovative venture, which aims to create a more secure and accessible investment landscape.</p>
        </div>
        <div class="paragraph">
          <h2 class="text-custom font-normal mb-2">Sustainable Solutions</h2>
          <p class="text-custom font-light mb-4">By tokenizing electric buses and backing a stable coin, we are not only providing a unique investment opportunity but also contributing to the development of sustainable urban mobility solutions.</p>
        </div>
      </div>
      <div class="image-section flex-1">
        <img src="../../../public/purple-bus.jpg" alt="Description" class="w-full h-auto">
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .bg-custom {
    background-color: #EA8D8D; /* Updated background color */
  }
  
  .text-custom {
    color: #591c63; /* Updated text color */
  }
  
  .flex-1 {
    flex: 1;
  }
  
  .text-section {
    padding: 20px;
  }
  
  .image-section {
    padding: 20px;
  }
  
  @media (max-width: 1024px) {
    .lg\\:flex-row {
      flex-direction: column;
    }
  }
  </style>
  