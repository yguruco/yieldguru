<template>

    <div class="w-auto">
        <!-- <div class="relative inline-block text-left"> -->
        <!-- Wallet Connect Button -->
        <!-- <button @click="toggleDropdown"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Connect Wallet
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M5.292 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button> -->

        <!-- Dropdown -->
        <!-- <div v-if="isDropdownOpen"
                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-999"
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    <template>
                        <button v-for="(connector, index) in connectors" :key="index"
                            @click="connect({ connector, chainId })"
                            class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem"
                            tabindex="-1">
                            {{ connector.name }}
                        </button>
                    </template>
</div>
</div>
</div> -->
        <div v-if="isConnected" class="btn flex">

            <img :alt="'#'" class="w-6 h-auto" :src="connector.icon" />

            <div>{{ `${address.slice(0, 6)}...${address.slice(-4)}` }}</div>

            <button @click="disconnect()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div v-else class="dropdown dropdown-bottom dropdown-end">
            <div tabindex="0" role="button" class="btn m-1">
                Connect Wallet
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M5.292 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li v-for="(connector, index) in connectors" :key="index">
                    <button @click="connect({ connector, chainId })"
                        class="flex text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 hover:text-white" role="menuitem"
                        tabindex="-1">
                        <img :alt="'#'" class="w-6 h-auto" :src="connector.icon" />
                        {{ connector.name }}
                    </button>
                </li>
            </ul>
        </div>
    </div>

</template>

<script setup lang="ts">
import { useAccount, useConnect, useDisconnect, useChainId } from '@wagmi/vue';
import { ref } from 'vue';

const { connectors, connect } = useConnect();
const { address, connector, isConnected } = useAccount();
const { disconnect } = useDisconnect();
const chainId = useChainId();
</script>