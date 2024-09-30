import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue';
import { axiosBackendInstance } from '@/utils/axios';

export const usePoolStore = defineStore('pool', () => {
    const pools = ref<[]>([]);
    const activePool = ref<any>('')

    async function fetchPools () {
        const response = await axiosBackendInstance.get('/api/pools');
            
        pools.value = response.data;
    }

    async function fetchPool (id: number) {
        const response = await axiosBackendInstance.get('/api/pools' + id);
        console.log(response);
    }

    async function addPool (form: {name: string, bio: string}) {
        try {
            const response = await axiosBackendInstance.post('/api/pools/create', form);
            await fetchPools();

            return true;
        } catch (error) {
            console.error('Error submitting form:', error);

            return false;
        }
    }

    return { 
        pools$: pools,
        activePool$: activePool,
        addPool,
        fetchPools,
        fetchPool
    }
})
