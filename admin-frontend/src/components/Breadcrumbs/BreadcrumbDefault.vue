<template>
	<div class="z-99 bg-white border-b border-primary-300 md:border-teal-light-300">
		<div class="md:container relative md:mx-auto flex flex-col md:flex-row justify-between md:gap-4 flex-nowrap">
			<nav class="border-b border-primary-500 md:border-0 flex overflow-x-auto shrink" aria-label="Breadcrumb">
				<ol role="list" class="flex space-x-0">
					<li class="flex">
						<div class="flex items-center">
							<router-link to="/"
								class="flex flex-row text-xs items-center text-primary-500 hover:text-yellow-400">
								<HomeIcon class="w-6 h-6" aria-hidden="true" />
								<span class="ml-1 text-xs font-medium sr-only">
									{{ 'home' }}
								</span>
							</router-link>
						</div>
					</li>
					<li v-show="(crumbsLength >= 1)" v-for="(crumb, index) in crumbs" :key="index" class="flex shrink">
						<svg class="hidden md:block flex-shrink-0 w-6 h-full text-primary-200" viewBox="0 0 24 44"
							preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true">
							<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
						</svg>
						<span class="px-1 text-primary-500 md:hidden">/</span>
						<div v-if="!(crumbsLength - 1 == index)" class="flex items-center">
							<router-link :to="crumb.link" v-if="crumb.external === true"
								class="inline-block md:ml-2 text-xs md:text-sm font-medium text-primary-500 hover:text-yellow-400 whitespace-nowrap">
								{{ crumb.label }}
							</router-link>
							<router-link :to="crumb.link" v-else
								class="inline-block md:ml-2 text-xs md:text-sm font-medium text-primary-500 hover:text-yellow-400 whitespace-nowrap">
								{{ crumb.label }}
							</router-link>
						</div>
						<div v-if="(crumbsLength - 1 == index)" class="flex items-center">
							<span
								class="inline-block md:ml-2 text-xs md:text-sm font-medium text-primary-500 whitespace-nowrap">
								{{ crumb.label }}
							</span>
						</div>
					</li>
				</ol>
			</nav>
			<nav class="relative w-full md:w-auto md:mr-4" v-if="subMenuLinks">
				<ul
					class="flex flex-row items-center justify-center h-full gap-2 md:gap-8 py-2 overflow-x-hidden text-sm md:text-md flex-nowrap">
					<li v-for="subMenu in subMenuLinks" :key="subMenu.label" class="flow-root menu-item">
						<route-link :to="subMenu.link"
							class="btn btn-xs btn-outline px-1 md:px-3 font-semibold text-sm md:text-md text-primary-500 hover:text-white hover:bg-primary-500 hover:cursor-pointer"
							:class="{
								'text-yellow-500': false,
								'w-24 v-full': false,
							}">
							{{ subMenu.label }}
						</route-link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>
<script setup lang="ts">
import router from '@/router';
import type { crumb } from '@/models/crumb';
import type { subMenu } from '@/models/subMenu';
import { computed, ref } from 'vue';
import { HomeIcon } from '@heroicons/vue/20/solid';

let crumbs = ref<crumb[] | any>(router.currentRoute.value.meta?.crumbs);
let crumbsLength = computed(() => {
	return crumbs.value.length;
})

let subMenuLinks = ref<subMenu[] | any>(router.currentRoute.value.meta?.subMenus);
</script>
