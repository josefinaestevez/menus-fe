<template>
  <div
    :class="[
      'fixed left-0 w-full h-16 flex justify-between items-center',
      { 'top-0 z-10': compacted },
    ]"
  >
    <!-- When the user hasn't scrolled -->
    <div v-if="!compacted" class="flex justify-between w-full mt-24 px-3 py-2">
      <div>
        <h1 class="text-2xl font-bold">Sunny Bites</h1>
        <p class="text-sm text-slate-400 mt-1 mb-4">Menú</p>
      </div>
      <div class="flex space-x-4 mt-1">
        <img :src="icons.search" alt="Search Icon" class="h-6 w-6" />
        <img :src="icons.info" alt="Info Icon" class="h-6 w-6" />
        <img :src="icons.globe" alt="Globe Icon" class="h-6 w-6" />
      </div>
    </div>

    <!-- When the user has scrolled -->
    <div
      v-else
      class="flex justify-between items-center w-full h-full px-4"
      :class="`bg-${background}`"
    >
      <div class="flex space-x-4">
        <img :src="icons.search" alt="Search Icon" class="h-6 w-6" />
        <img :src="icons.globe" alt="Globe Icon" class="h-6 w-6" />
      </div>
      <h1 v-if="!hideTitle" class="text-xl font-semibold text-center flex-1">
        Sunny Bites
      </h1>
      <img :src="icons.info" alt="Info Icon" class="h-6 w-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import type { BackgroundType } from '@/types/menu';

const props = defineProps({
  compacted: {
    type: Boolean,
    default: true,
  },
  background: {
    type: String as PropType<BackgroundType>,
    default: 'white',
  },
  hideTitle: {
    type: Boolean,
    default: false,
  },
});

const icons = {
  search: `/icons/search-${props.background === 'transparent' ? 'white' : 'black'}.svg`,
  globe: `/icons/globe-${props.background === 'transparent' ? 'white' : 'black'}.svg`,
  info: `/icons/info-${props.background === 'transparent' ? 'white' : 'black'}.svg`,
};
</script>
