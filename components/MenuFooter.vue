<template>
  <footer
    class="left-0 w-full bg-white"
    :class="{
      'bottom-0 fixed': position === 'bottom',
      'top-0 sticky': position === 'top',
    }"
  >
    <div
      class="flex overflow-x-auto items-center h-16 border-b-2 border-solid border-stone-200 scrollbar-hide"
    >
      <a
        v-for="category in categories"
        :key="category.name"
        class="h-full flex flex-col items-center text-gray-600 hover:text-black flex-shrink-0 w-1/3 justify-center relative"
        @click.prevent="selectCategory(category)"
      >
        <span
          class="text-base"
          :class="{ 'font-bold': selectedCategory?.name === category.name }"
          >{{ category.name }}</span
        >
        <div
          v-if="selectedCategory?.name === category.name"
          class="absolute bottom-0 left-0 w-full border-b-4 border-solid border-amber-300"
        ></div>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue';
import type { Category } from '../types/menu';

const props = defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    required: true,
  },
  position: {
    type: String,
    default: 'bottom',
  },
});

const selectedCategory = ref<Category | null>(props.categories[0]);

const emit = defineEmits<{
  (event: 'update:selectedCategory', category: Category): void;
}>();

function selectCategory(category: Category): void {
  selectedCategory.value = category;
  emit('update:selectedCategory', category);
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE y Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
