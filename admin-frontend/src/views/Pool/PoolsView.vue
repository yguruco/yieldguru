<template>
    <DefaultLayout>

        <div class="flex flex-col p-6 space-y-6 bg-white sm:px-6 lg:col-span-9 lg:px-0 relative">

            <section class="p-16 text-center align-middle absolute w-full h-full z-10" v-if="!pools$.length">
                <ProgressSpinner />
            </section>

            <section class="p-6" v-else>
                <div class="flex justify-between mb-4">
                    <h2 class="mb-2 text-lg lg:text-xl xl:text-3xl">Pools</h2>
                    <AddPoolButton />
                </div>
                <div
                    class="grid grid-cols-1 gap-6 lg:col-span-9 xl:col-span-10 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
                    <div class="relative h-72" v-for="pool in pools$" :key="pool?.id">
                        <PoolCard :pool="pool" />
                    </div>

                    <!-- <div
                        class="relative flex flex-col items-center justify-center object-cover w-full h-full min-h-[14rem] text-black border-2 border-teal-800 border-dashed item rounded-l-xl rounded-r-xs">
                        <router-link
                            class="text-teal-800 w-full h-full p-4 text-center flex flex-col items-center justify-center"
                            method="post" :to="'/'">
                            <span>Create Pool</span>
                            <AddPoolButton />
                        </router-link>
                    </div> -->
                </div>
            </section>
        </div>
    </DefaultLayout>
</template>
<script setup lang="ts">
import ProgressSpinner from '@/components/ProgressSpinner.vue';
import { ref, onMounted } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import PoolCard from '@/modules/pool/PoolCard.vue';
import AddPoolButton from '@/components/Modals/AddPoolButton.vue';
import { usePoolStore } from '@/stores/poolStore';
import { storeToRefs } from 'pinia';

const poolStore = usePoolStore();
const { pools$ } = storeToRefs(poolStore);



onMounted(() => {
    poolStore.fetchPools();
})
</script>