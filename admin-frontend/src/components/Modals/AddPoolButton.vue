<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import AddPoolModal from './Modals/AddPoolModal.vue'
const { open, close } = useModal({
    component: AddPoolModal,
    attrs: {
        onConfirm() {
            close()
        },
        onCancel() {
            close()
        },
    }
})
</script>

<template>
    <button class="btn btn-primary bg-primary-500 hover:bg-primary-200 " @click="() => open()">
        Add Pool
    </button>
</template>
