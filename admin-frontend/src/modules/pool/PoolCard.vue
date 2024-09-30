<template>
    <div :style="{ backgroundColor: 'green' }"
        class="relative flex flex-col justify-center object-cover w-full h-full text-white shadow-md hover:shadow-xl rounded-l-xl rounded-r-xs">
        <div class="relative flex justify-end my-auto">
            <div class="box-border inline w-4/5 px-3 py-4 my-auto bg-white rounded-l-lg box-decoration-clone -right-6">
                <div class="flex flex-col items-start text-xl font-bold tracking-tight sm:text-2xl text-slate-800">
                    <small class="inline-flex items-center rounded-sm py-0.5 pr-1 text-xs font-medium">
                        {{ "Users" }}
                        <span
                            class="ml-0.5 inline-flex flex-shrink-0 items-center justify-center rounded-full font-bold focus:outline-none">
                            {{ pool?.users?.length }}
                        </span>
                    </small>
                    <span class="inline-flex line-clamp-3">{{ pool?.name }}</span>
                </div>

                <div class="flex justify-between gap-2 mt-2">
                    <router-link as="button" type="button" :to="{ name: 'PoolDetails', params: { hash: pool.hash } }"
                        class="text-sm font-semibold text-primary-600 hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800">
                        {{ "Open" }}
                    </router-link>
                    <!--                    <Link as="button" type="button"-->
                    <!--                        :href="route('catalyst-explorer.draftBallot.view', { draftBallot: draftBallot?.hash })"-->
                    <!--                        class="text-xs font-semibold text-teal-600 hover:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800">-->
                    <!--                    {{ $t("View") }}-->
                    <!--                    </Link>-->
                    <div class="text-gray-500">
                        <DeletePool :draftBallot="pool" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DeletePool from '@/modules/pool/DeletePool.vue';


const props = withDefaults(
    defineProps<{
        pool?: any
    }>(),
    {},
);
</script>
