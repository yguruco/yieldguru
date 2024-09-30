<template>
    <section class="space-y-6">
        <button class="flex-wrap text-primary-500 hover:text-red-500" @click="confirmUserDeletion">
            <TrashIcon class="-mr-0.5 h-4 w-4" />
        </button>

        <div v-if="confirmingUserDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Are you sure you want to delete the ballot?
                </h2>

                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Once the ballot is deleted, all of its resources and data will be permanently deleted.
                </p>
                <div class="flex justify-end mt-6">
                    <div class="btn btn-info" @click="closeModal"> Cancel </div>

                    <div class="ml-3 btn btn-warning" @click="deleteDraftBallot">
                        Delete Pool
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
// import DangerButton from '@/Components/DangerButton.vue';
// import Modal from '@/Components/Modal.vue';
// import SecondaryButton from '@/Components/SecondaryButton.vue';
// import {router} from '@inertiajs/vue3';
import { ref } from 'vue';
import { TrashIcon } from '@heroicons/vue/20/solid'
// import DraftBallot from "@apps/catalyst-explorer/models/draft-ballot";
// import Proposal from "@apps/catalyst-explorer/models/proposal";
// import {useBookmarksStore} from "@apps/catalyst-explorer/stores/bookmarks-store";
// import route from '@/global/utils/route';

const props = defineProps<{
    draftBallot: any
}>();

const confirmingUserDeletion = ref(false);

// check if collection is on local
// const bookmarksStore = useBookmarksStore();

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
};

const closeModal = () => {
    confirmingUserDeletion.value = false;
};

let deleteDraftBallot = () => {
    // bookmarksStore.deleteCollection(props.draftBallot.hash);
    // router.get(route('catalyst-explorer.myDraftBallots'));
}
</script>
