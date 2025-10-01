<script setup lang="ts">
import type { Work } from '~/types/global';

const {work} = defineProps<{work :Work}>() 

</script>
<template>

  <div
    class="work-card border border-border dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-main-dark shadow-sm hover:shadow-md transition-shadow duration-300">
    <NuxtImg :src="work.image" :alt="work.title" class="w-full h-48 lg:h-56 xl:h-64 object-cover  mb-4" />
    <div class="px-4 md:px-6 lg:px-8 mb-2 lg:mb-3.5">
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{{ work.title }}</h3>
      <p class="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">{{ work.description }}</p>

      <div class="mb-4">
        <span v-for="tool in work.tools" :key="tool"
          class="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs md:text-sm px-2 py-1 rounded-full mr-2 mb-2">
          {{ tool }}
        </span>
      </div>
      <div class="flex gap-4">
      
        <UiButtonsPrimary button-type="link" :href="work.url" target="_blank" rel="noopener noreferrer"
          class=" flex justify-center text-xs md:text-sm  gap-2 items-center rounded-md " :class="work.gitUrl!=null?'flex-11/12':'w-full'">
          <SVG name="external-link"></SVG>
          <span>

            Live
          </span>
        </UiButtonsPrimary>
          <a v-if="work.gitUrl" :href="work.gitUrl" target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub"
          class="border border-gray-400 bg-gray-100 dark:bg-gray-700 dark:border-gray-500 py-1.5 text-xs md:text-sm px-4 rounded-md grid items-center justify-center ">
          <SVG name="github"></SVG>
        </a>
      </div>
    </div>
  </div>
</template>