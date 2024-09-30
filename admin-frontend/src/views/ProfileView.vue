<script setup lang="ts">
import { ref } from 'vue'
import ProfileCard from '@/modules/profile/ProfileCard.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'

</script>

<template>
  <DefaultLayout>
    <div class="mx-auto max-w-242.5">
      <ProfileCard />
    </div>
  </DefaultLayout>
</template>
