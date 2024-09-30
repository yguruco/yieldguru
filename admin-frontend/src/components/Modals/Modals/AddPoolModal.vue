<template>
    <VueFinalModal class="flex justify-center items-center text-black-2"
        content-class="flex flex-col w-5/6 max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2">
        <h1 class="text-xl">
            Create Pool
        </h1>
        <div class="w-full">
            <form @submit.prevent="submitForm" class="flex flex-col gap-4">
                <!-- name input -->
                <label class="input input-bordered flex items-center gap-2">
                    <input type="text" class="grow min-w-92" v-model="form.name" placeholder="Enter your name" />
                </label>

                <!-- bit text area -->
                <textarea class="w-full textarea textarea-bordered textarea-lg grow" v-model="form.bio"
                    placeholder="bio"></textarea>

                <!-- button section -->
                <div class="w-full flex justify-center gap-4">
                    <button type="button btn-md" class="btn text-white btn-error"
                        @click="emit('cancel')">Cancel</button>
                    <button type="submit" class="btn btn-md text-white bg-primary-500 hover:bg-primary-200 py-2">Create
                        Pool</button>
                </div>
            </form>
        </div>
    </VueFinalModal>
</template>
<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { ref } from 'vue';
import axios from 'axios';
import { usePoolStore } from '@/stores/poolStore';
import router from '@/router';


// Define reactive form object
const form = ref({
    name: '',
    bio: ''
});

const emit = defineEmits<{
    (e: 'confirm'): void;
    (e: 'cancel'): void
}>()


// Submit form data to API
const submitForm = async () => {
    const poolStore = usePoolStore();
    let resp = await poolStore.addPool(form.value);

    if (resp) {
        emit('cancel');
        // router.push({ name: 'Pools' });
    }
    console.log(resp);
};

// Reset form
const cancelForm = () => {
    form.value.name = '';
    form.value.bio = '';
};
</script>
