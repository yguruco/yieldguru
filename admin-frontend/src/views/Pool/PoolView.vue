<template>
    <DefaultLayout>

        <div class="flex flex-col p-6 space-y-6 sm:px-6 lg:col-span-9 lg:px-0 relative">
            <div role="tablist" class="tabs tabs-lifted">
                <template v-for="(tab, index) in tabOptions" :key="index">
                    <input type="radio" name="poolViewTab" role="tab" class="tab text" @click="updateTab(tab.name)"
                        :aria-label="tab.label" :class="{
                            'tab-active text-white text-semibold text-md [--tab-bg:purple] [--tab-border-color:purple]': activeTab == tab.name
                        }" />
                    <div v-if="tab.name == 'tab1'" role="tabpanel"
                        class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Tab content 1
                    </div>
                    <div v-if="tab.name == 'tab2'" role="tabpanel"
                        class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Tab content 2
                    </div>
                    <div v-if="tab.name == 'tab3'" role="tabpanel"
                        class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Tab content 3
                    </div>
                </template>
            </div>
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
const { activePool$ } = storeToRefs(poolStore);

let activeTab = ref<string>('tab1');
let tabOptions = [
    {
        name: 'tab1',
        label: 'Pool Details',
    },
    {
        name: 'tab2',
        label: 'Pool Users',
    },
    {
        name: 'tab3',
        label: 'Pool Assets',
    }
]

const updateTab = (name: string) => {
    const elements = document.querySelectorAll('input[name="poolViewTab"]');

    elements.forEach((element) => {
        element.classList.remove('tab-active');
    });

    activeTab.value = name;
}
</script>