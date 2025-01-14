<template>
  <div
    :class="[
      'fixed left-0 w-full h-16 flex justify-between items-center',
      { 'top-0 z-10': scrolled },
    ]"
  >
    <!-- When the user hasn't scrolled -->
    <div v-if="!scrolled" class="flex justify-between w-full mt-20 px-3 py-2">
      <div>
        <h1 class="text-2xl">Sunny Bites</h1>
        <p class="text-sm text-slate-400 mt-2 mb-4">Menu</p>
      </div>
      <div class="flex space-x-4 mt-1">
        <img src="/public/icons/search.svg" alt="Search Icon" class="h-6 w-6" />
        <img src="/public/icons/info.svg" alt="Info Icon" class="h-6 w-6" />
        <img src="/public/icons/globe.svg" alt="Globe Icon" class="h-6 w-6" />
      </div>
    </div>

    <!-- When the user has scrolled -->
    <div
      v-else
      class="flex justify-between items-center w-full bg-white h-full px-4"
    >
      <div class="flex space-x-4">
        <img src="/public/icons/search.svg" alt="Search Icon" class="h-6 w-6" />
        <img src="/public/icons/globe.svg" alt="Globe Icon" class="h-6 w-6" />
      </div>
      <h1 class="text-xl font-semibold text-center flex-1">Sunny Bites</h1>
      <img src="/public/icons/info.svg" alt="Info Icon" class="h-6 w-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  scrolled: Boolean,
});
</script>
